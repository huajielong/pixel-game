import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PixelCard from '../components/PixelCard';
import PixelButton from '../components/PixelButton';

const Home = () => {
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (userId.trim()) {
            navigate('/game', { state: { userId: userId.trim() } });
        } else {
            alert("Please enter a User ID!"); // Could be a pixel modal later
        }
    };

    return (
        <PixelCard title="PIXEL QUIZ GAME">
            <div style={{ padding: '20px' }}>
                <p>Enter your ID to challenge the Pavilion Master!</p>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        className="pixel-input"
                        placeholder="USER ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <PixelButton onClick={handleStart} variant="primary">
                    START GAME
                </PixelButton>
            </div>
        </PixelCard>
    );
};

export default Home;
