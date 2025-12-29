import axios from 'axios';

const API_URL = import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL;

export const getQuestions = async () => {
    try {
        const response = await axios.get(API_URL);
        if (response.data.success) {
            return response.data.questions;
        } else {
            throw new Error(response.data.error || 'Failed to fetch questions');
        }
    } catch (error) {
        console.error("API Error:", error);
        // Return mock data if API fails or not set (for testing UI)
        if (!API_URL) {
            console.warn("API URL not set. returning mock data.");
            return [
                { id: '1', question: 'React 18 introduced which feature?', options: { A: 'Hooks', B: 'Concurrent Mode', C: 'Class Components', D: 'Mixins' } },
                { id: '2', question: 'What is the mascot of Vite?', options: { A: 'Thunder', B: 'Lightning', C: 'Speedy', D: 'Bolt' } }
            ];
        }
        throw error;
    }
};

export const submitResult = async (userId, answers) => {
    try {
        // GAS requires POST data to be a stringified JSON if using simple triggers/doPost sometimes, 
        // but axios sends JSON by default. GAS doPost(e) usually needs e.postData.contents.
        // However, with CORS and 'Content-Type': 'application/json', default axios might trigger OPTIONS.
        // Our GAS script handles OPTIONS.
        // Sometimes GAS requires sending as text/plain to avoid CORS preflight, but we implemented OPTIONS support.

        // To be safe with GAS and tricky CORS, sometimes `navigator.sendBeacon` or hidden form is used, 
        // but standard Axios with proper GAS CORS headers usually works.

        const response = await axios.post(API_URL, {
            userId,
            answers
        }, {
            headers: {
                'Content-Type': 'text/plain' // Use text/plain to avoid preflight if possible, though we handled options. 
                // Actually, if we send JSON, browser forces preflight. 
                // Let's stick to simple POST if possible or JSON. 
                // I will use JSON but handle the fact that GAS might see it as stream.
            }
        });

        return response.data;
    } catch (error) {
        console.error("Submission Error:", error);
        // Mock response
        if (!API_URL) return { success: true, score: 80, passed: true, correctCount: 2 };
        throw error;
    }
};
