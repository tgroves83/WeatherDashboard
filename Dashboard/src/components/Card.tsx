import React from 'react';

type CardProps = {
    title: string;
    description: string;
    imageUrl?: string;
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '300px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white'
        }}>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '4px'
                    }}
                />
            )}
            <h2 style={{
                marginTop: '12px',
                fontSize: '1.5rem',
                color: '#333'
            }}>
                {title}
            </h2>
            <p style={{
                color: '#666',
                lineHeight: '1.5'
            }}>
                {description}
            </p>
            {children}
        </div>
    );
};

export default Card;
