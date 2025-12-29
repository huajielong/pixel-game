import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PixelCard from '../components/PixelCard';
import PixelButton from '../components/PixelButton';
import { submitResult } from '../api';

const Result = () => {
    const { state } = useLocation();
    const userId = state?.userId;
    const answers = state?.answers;
    const navigate = useNavigate();

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId || !answers) {
            navigate('/');
            return;
        }
        processResult();
    }, []);

    const processResult = async () => {
        try {
            const data = await submitResult(userId, answers);
            setResult(data);
        } catch (err) {
            console.error(err);
            alert("Error submitting score. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="center-flex">Calcuating Score...</div>;

    return (
        <div className="center-flex">
            <PixelCard title="RESULTS">
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h3>User: {userId}</h3>

                    {result ? (
                        <>
                            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
                                Score: <span style={{ color: '#ffcc00' }}>{result.score}</span>
                            </p>
                            <p>
                                Status: {result.passed ? <span style={{ color: 'green' }}>PASSED</span> : <span style={{ color: 'red' }}>FAILED</span>}
                            </p>
                            <p>Correct: {result.correctCount} / {result.totalQuestions || Object.keys(answers).length}</p>
                        </>
                    ) : (
                        <p>No result data.</p>
                    )}

                    <div style={{ marginTop: '30px' }}>
                        <PixelButton onClick={() => navigate('/')}>
                            PLAY AGAIN
                        </PixelButton>
                    </div>
                </div>
            </PixelCard>
        </div>
    );
};

export default Result;
