import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PixelCard from '../components/PixelCard';
import PixelButton from '../components/PixelButton';
import { getQuestions } from '../api';

const Game = () => {
    const { state } = useLocation();
    const userId = state?.userId;
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // { qId: "A" }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            navigate('/');
            return;
        }
        loadQuestions();
    }, [userId]);

    const loadQuestions = async () => {
        try {
            const data = await getQuestions();
            setQuestions(data);
        } catch (err) {
            setError("Failed to load level.");
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (optionKey) => {
        const currentQ = questions[currentQIndex];
        setAnswers(prev => ({ ...prev, [currentQ.id]: optionKey }));

        // Move to next or finish
        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
        } else {
            // Finish
            const finalAnswers = { ...answers, [currentQ.id]: optionKey };
            navigate('/result', { state: { userId, answers: finalAnswers } });
        }
    };

    if (loading) return <div className="center-flex">Loading Pavilion...</div>;
    if (error) return <div className="center-flex">{error}</div>;
    if (questions.length === 0) return <div className="center-flex">No questions found.</div>;

    const currentQ = questions[currentQIndex];
    // Use question ID as seed for consistent avatar per question
    const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${currentQ.id}`;

    return (
        <div className="center-flex" style={{ padding: '10px' }}>
            <div style={{ width: '100%', maxWidth: '600px' }}>
                <div style={{ marginBottom: '10px', textAlign: 'right' }}>
                    Level {currentQIndex + 1} / {questions.length}
                </div>

                {/* Pavilion Master Avatar */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div className="pixel-box" style={{ padding: '5px', width: '120px', height: '120px' }}>
                        <img src={avatarUrl} alt="Master" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>

                <PixelCard title={`Question ${currentQIndex + 1}`}>
                    <p style={{ lineHeight: '1.6', minHeight: '60px' }}>{currentQ.question}</p>
                </PixelCard>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                    {Object.entries(currentQ.options).map(([key, text]) => (
                        text && (
                            <PixelButton
                                key={key}
                                onClick={() => handleAnswer(key)}
                                className="pixel-btn"
                            >
                                {key}: {text}
                            </PixelButton>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Game;
