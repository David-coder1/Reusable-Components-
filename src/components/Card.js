import React from 'react';

const Card = ({ children, style }) => (
    <div
        style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '10px 0',
            ...style
        }}
    >
        {children}
    </div>
);

export default Card;