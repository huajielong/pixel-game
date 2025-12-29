function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Preflight check
  if (e.parameter && e.parameter.method === "OPTIONS") {
     return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON).setHeaders(headers);
  }

  try {
    if (e.postData) {
      // Handle POST (Submit Answers)
      const result = processSubmission(e);
       return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    } else {
      // Handle GET (Fetch Questions)
      const result = getQuestions();
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

function getQuestions() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("题目"); // Sheet with Questions
  const data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) {
    return { success: true, questions: [] };
  }

  const headers = data[0];
  const rows = data.slice(1);
  const questionCount = parseInt(PropertiesService.getScriptProperties().getProperty('QUESTION_COUNT') || '5');
  
  // Randomly select N questions
  const selectedRows = [];
  const availableIndices = rows.map((_, i) => i);
  
  for (let i = 0; i < questionCount && availableIndices.length > 0; i++) {
    const randIndex = Math.floor(Math.random() * availableIndices.length);
    const originalIndex = availableIndices.splice(randIndex, 1)[0];
    selectedRows.push(rows[originalIndex]);
  }

  // Format without Answer column (Assuming Answer is at index 6: ID, Q, A, B, C, D, Answer)
  // Maps to: { id, question, options: {A, B, C, D} }
  const questions = selectedRows.map(row => ({
    id: row[0],
    question: row[1],
    options: {
      A: row[2],
      B: row[3],
      C: row[4],
      D: row[5]
    }
  }));

  return { success: true, questions: questions };
}

function processSubmission(e) {
  const data = JSON.parse(e.postData.contents);
  const userId = data.userId;
  const answers = data.answers; // Object { questionId: "A", ... }
  
  if (!userId || !answers) {
    throw new Error("Missing userId or answers");
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const qSheet = ss.getSheetByName("题目");
  const aSheet = ss.getSheetByName("回答"); // Sheet with Answers/Stats

  // Calculate Score
  const qData = qSheet.getDataRange().getValues();
  const qRows = qData.slice(1); // Skip header
  
  let score = 0;
  const questionCount = Object.keys(answers).length;
  // Or use the questions that were sent? Better to just check correctness of submitted answers.
  // Assuming 1 point per correct answer.
  
  // Create a map for quick lookup: { qId: correctAnswer }
  // Assuming ID is column 0, Answer is column 6
  const answerKey = {};
  qRows.forEach(row => {
    answerKey[row[0]] = row[6];
  });

  let correctCount = 0;
  for (const [qid, userAns] of Object.entries(answers)) {
    if (answerKey[qid] && String(answerKey[qid]).toUpperCase() === String(userAns).toUpperCase()) {
      correctCount++;
    }
  }

  // Calculate generic score (e.g., 100 based)
  const totalQuestions = parseInt(PropertiesService.getScriptProperties().getProperty('QUESTION_COUNT') || '5');
  const finalScore = Math.round((correctCount / totalQuestions) * 100);
  const threshold = parseInt(PropertiesService.getScriptProperties().getProperty('PASS_THRESHOLD') || '3'); // count threshold
  const passed = correctCount >= threshold;

  // Update "回答" Sheet
  // Columns: ID, 闯关次数, 总分, 最高分, 第一次通关分数, 通关次数, 最近游玩时间
  const aData = aSheet.getDataRange().getValues();
  let userRowIndex = -1;
  
  // Find user (skip header)
  for (let i = 1; i < aData.length; i++) {
    if (String(aData[i][0]) === String(userId)) {
      userRowIndex = i + 1; // 1-based index for getRange
      break;
    }
  }

  const now = new Date();

  if (userRowIndex !== -1) {
    // Update existing user
    // A:1, B:2 (Count), C:3 (TotalScore?? Maybe cumulative?), D:4 (Max), E:5 (FirstPass), F:6 (PassCount), G:7 (Time)
    // Let's interpret "Total Score" as "Current Score" or "Cumulative"? 
    // Usually "总分" in games might mean cumulative points? Or just latest? 
    // "成绩计算...记录到 Google Sheets"
    // "若同一 ID 已通关，后续分数不覆盖，仅在同列增加闯关次数" -> This implies we keep the "First Pass Score".
    // "最高分" -> Keep max.
    
    // Let's assume:
    // Col 2: Play Count (+1)
    // Col 3: Total Cumulative Score (Adding up all plays? Or just latest? Let's add up.)
    // Col 4: Max Score (Update if higher)
    // Col 5: First Pass Score (Set if passed and was empty)
    // Col 6: Pass Count (+1 if passed)
    // Col 7: Last Played Time
    
    const range = aSheet.getRange(userRowIndex, 1, 1, 7);
    const values = range.getValues()[0];
    
    const currentPlayCount = values[1] || 0;
    const currentTotalScore = values[2] || 0; // Cumulative
    const currentMaxScore = values[3] || 0;
    const firstPassScore = values[4];
    const currentPassCount = values[5] || 0;
    
    const newPlayCount = currentPlayCount + 1;
    const newTotalScore = currentTotalScore + finalScore;
    const newMaxScore = Math.max(currentMaxScore, finalScore);
    let newFirstPassScore = firstPassScore;
    let newPassCount = currentPassCount;
    
    if (passed) {
      newPassCount++;
      if (firstPassScore === "" || firstPassScore === null || firstPassScore === undefined) {
        newFirstPassScore = finalScore;
      }
    }
    
    range.setValues([[userId, newPlayCount, newTotalScore, newMaxScore, newFirstPassScore, newPassCount, now]]);
    
  } else {
    // New User
    const firstPassScore = passed ? finalScore : "";
    const passCount = passed ? 1 : 0;
    aSheet.appendRow([userId, 1, finalScore, finalScore, firstPassScore, passCount, now]);
  }

  return { 
    success: true, 
    score: finalScore, 
    correctCount: correctCount, 
    passed: passed, 
    totalQuestions: totalQuestions 
  };
}
