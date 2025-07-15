import React from 'react';
import styles from './Card.module.css';

type CardProps = {
    title?: string;
    description?: string;
    imageUrl?: string;
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
    return (
        <div className={styles.card}>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className={styles.image}
                />
            )}
            {title && <h1 className={styles.title}>{title}</h1>}
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </div>
    );
};

export default Card;
