import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { siteConfig, staticContent } from '@/data/siteConfig';
import Link from 'next/link';

export const metadata = {
    title: "关于",
    description: "了解稻田蛙声的使命、愿景及如何开展技术传播合作。",
};

export default function AboutPage() {
    return (
        <>
            <Section className="!pt-20 !pb-8 md:!pt-24 md:!pb-12">
                <Container>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">关于稻田蛙声</h1>
                    <div className="prose max-w-xl text-base md:text-lg">
                        <p className="leading-relaxed mb-4">{staticContent.about.intro}</p>
                        <p className="leading-relaxed">{staticContent.about.values_detail}</p>
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        <div className="card">
                            <p className="text-xs md:text-sm text-text-muted mb-3 md:mb-4">核心使命</p>
                            <p className="font-serif text-xl md:text-2xl leading-relaxed">{siteConfig.mission}</p>
                        </div>
                        <div className="card">
                            <p className="text-xs md:text-sm text-text-muted mb-3 md:mb-4">品牌愿景</p>
                            <p className="font-serif text-xl md:text-2xl leading-relaxed">{siteConfig.vision}</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section id="contact">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8">联系我们</h2>
                            <p className="text-text-secondary text-sm md:text-base mb-8 md:mb-12 leading-relaxed">
                                如果您对新质诊疗技术的传播、医源性的学术支持或培训基地共建有合作意向，请与我们联系。
                            </p>

                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <p className="text-xs md:text-sm text-text-muted mb-1 md:mb-2">电子邮箱</p>
                                    <p className="font-serif text-base md:text-lg">{siteConfig.contact.email}</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-text-muted mb-1 md:mb-2">微信</p>
                                    <p className="font-serif text-base md:text-lg">{siteConfig.contact.wechat}</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-text-muted mb-1 md:mb-2">办公地址</p>
                                    <p className="font-serif text-base md:text-lg">{siteConfig.contact.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-serif text-lg md:text-xl mb-6 md:mb-8">发送合作意向</h3>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block text-xs md:text-sm text-text-muted mb-2">您的姓名</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-transparent border border-border-light focus:border-foreground outline-none transition-colors rounded-lg"
                                        placeholder="姓名"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs md:text-sm text-text-muted mb-2">机构/医院</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-transparent border border-border-light focus:border-foreground outline-none transition-colors rounded-lg"
                                        placeholder="机构名称"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs md:text-sm text-text-muted mb-2">联系方式</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-transparent border border-border-light focus:border-foreground outline-none transition-colors rounded-lg"
                                        placeholder="电话或邮箱"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs md:text-sm text-text-muted mb-2">合作意向</label>
                                    <select className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-transparent border border-border-light focus:border-foreground outline-none transition-colors appearance-none rounded-lg">
                                        <option>外科技术传播</option>
                                        <option>病理技术传播</option>
                                        <option>培训基地合作</option>
                                        <option>其他合作</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs md:text-sm text-text-muted mb-2">备注信息</label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-transparent border border-border-light focus:border-foreground outline-none transition-colors rounded-lg"
                                        placeholder="请简要说明您的需求"
                                    ></textarea>
                                </div>
                                <button type="button" className="btn-pill w-full justify-center">
                                    提交申请
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
