import React from 'react';
import '../pixel.css';

const PixelCard = ({ children, className = '', title }) => {
    return (
        <div className={`pixel-box ${className}`}>
            {title && <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>{title}</h2>}
            {children}
        </div>
    );
};

export default PixelCard;
