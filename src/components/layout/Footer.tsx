import React from 'react';
import { Container } from '../ui/Container';
import { siteConfig } from '@/data/siteConfig';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 md:py-16 border-t border-border-light">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div>
                        <Link href="/" className="text-base md:text-lg">
                            {siteConfig.name}
                        </Link>
                    </div>

                    <div className="space-y-2 md:space-y-3 text-sm text-text-secondary">
                        <p>{siteConfig.contact.email}</p>
                        <p>微信: {siteConfig.contact.wechat}</p>
                    </div>

                    <div className="text-xs text-text-muted leading-relaxed sm:col-span-2 lg:col-span-1">
                        <p className="text-sm mb-2">免责声明</p>
                        <p>{siteConfig.disclaimer}</p>
                    </div>
                </div>

                <hr className="divider !my-6 md:!my-8" />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 text-xs text-text-muted">
                    <p>{siteConfig.contact.copyright}</p>
                    <p>沪ICP备XXXXXXXX号-1</p>
                </div>
            </Container>
        </footer>
    );
};
