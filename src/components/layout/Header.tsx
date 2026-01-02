'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { siteConfig } from '@/data/siteConfig';

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkDarkMode = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    // 使用默认 logo.png 避免 SSR 水合不匹配
    const logoSrc = mounted && isDark ? "/logo_dark.png" : "/logo.png";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-light">
            <Container>
                <div className="flex items-center justify-between h-14 md:h-16">
                    <Link href="/" className="shrink-0">
                        <Image
                            src={logoSrc}
                            alt={siteConfig.name}
                            width={140}
                            height={40}
                            className="h-8 md:h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-4 md:gap-8">
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            {siteConfig.nav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 -mr-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="菜单"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className={`block h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                                <span className={`block h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-0.5 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border-light">
                    <Container>
                        <nav className="py-4 space-y-1">
                            {siteConfig.nav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-3 text-lg text-text-secondary hover:text-foreground transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
};
