import React from 'react';
import { Container } from '../ui/Container';
import { siteConfig } from '@/data/siteConfig';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 md:py-16 border-t border-border-light">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-base md:text-lg font-medium">
                            {siteConfig.name}
                        </Link>
                        <p className="text-sm text-text-muted mt-2">
                            新质诊疗技术传播服务商
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 text-sm text-text-secondary">
                        <p className="text-xs text-text-muted mb-3">联系方式</p>
                        <p>{siteConfig.contact.email}</p>
                        <p>微信: {siteConfig.contact.wechat}</p>
                    </div>

                    {/* Social QR Codes */}
                    <div className="lg:col-span-2">
                        <p className="text-xs text-text-muted mb-3">关注我们</p>
                        <div className="w-20 h-20 shrink-0 rounded-lg border border-border-light bg-transparent flex items-center justify-center text-xs text-text-muted">
                            微信公众号
                        </div>
                        <div className="w-20 h-20 shrink-0 rounded-lg border border-border-light bg-transparent flex items-center justify-center text-xs text-text-muted">
                            视频号
                        </div>
                        <div className="w-20 h-20 shrink-0 rounded-lg border border-border-light bg-transparent flex items-center justify-center text-xs text-text-muted">
                            小红书
                        </div>
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
