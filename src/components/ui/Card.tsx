import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hoverable = true }) => {
    return (
        <div className={`p-8 border border-border-light bg-white/40 backdrop-blur-sm transition-all duration-300 ${hoverable ? 'hover:border-accent/20 hover:shadow-sm hover:translate-y-[-2px]' : ''} ${className}`}>
            {children}
        </div>
    );
};
