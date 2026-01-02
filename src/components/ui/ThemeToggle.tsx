'use client';

import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (saved === 'dark' || (!saved && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggle = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    if (!mounted) {
        return <div className="w-4 h-4" />;
    }

    return (
        <button
            onClick={toggle}
            className="w-4 h-4 rounded-full transition-colors"
            style={{ backgroundColor: isDark ? '#F3F1E7' : '#191919' }}
            aria-label={isDark ? '切换到日间模式' : '切换到夜间模式'}
            title={isDark ? '切换到日间模式' : '切换到夜间模式'}
        />
    );
};
