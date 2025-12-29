import React from 'react';
import '../pixel.css';

const PixelButton = ({ children, onClick, disabled, variant = 'default', className = '' }) => {
    return (
        <button
            className={`pixel-btn ${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
            style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            {children}
        </button>
    );
};

export default PixelButton;
