import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hoverable = true }) => {
    return (
        <div className={`p-8 bg-white border border-border-light shadow-sm transition-all duration-300 rounded-[1px] ${hoverable ? 'hover:shadow-md hover:-translate-y-[2px] hover:border-black/5' : ''} ${className}`}>
            {children}
        </div>
    );
};
