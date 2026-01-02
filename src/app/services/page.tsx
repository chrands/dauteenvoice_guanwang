import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { services } from '@/data/siteConfig';
import Link from 'next/link';

export const metadata = {
    title: "服务",
    description: "提供外科、病理及医务培训的专业化技术传播服务。",
};

export default function ServicesPage() {
    return (
        <>
            <Section className="!pt-20 !pb-8 md:!pt-24 md:!pb-12">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">我们的服务</h1>
                            <p className="text-base md:text-lg text-text-secondary max-w-lg leading-relaxed">
                                基于对新质诊疗技术的深度理解，我们提供多维度的技术传播与服务支持方案。
                            </p>
                        </div>
                        <div className="image-placeholder aspect-[4/3]">
                            服务总览图
                        </div>
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section>
                <Container>
                    <div className="space-y-6 md:space-y-8">
                        {services.map((service, index) => (
                            <article key={index} className="card">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                    <div className="image-placeholder aspect-[4/3] !min-h-[150px]">
                                        {service.tag}服务配图
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="mb-3 md:mb-4">
                                            <Tag>{service.tag}</Tag>
                                        </div>

                                        <h2 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">{service.title}</h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                                            <div>
                                                <p className="text-xs md:text-sm text-text-muted mb-2">适用对象</p>
                                                <p className="text-text-secondary text-sm md:text-base leading-relaxed">{service.target}</p>
                                            </div>

                                            <div>
                                                <p className="text-xs md:text-sm text-text-muted mb-2">我们提供</p>
                                                <ul className="space-y-1.5 md:space-y-2">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="text-text-secondary text-sm leading-relaxed">
                                                            — {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pt-3 md:pt-4 border-t border-border-light mb-4 md:mb-6">
                                            <p className="text-xs md:text-sm text-text-muted mb-2">交付示例</p>
                                            <p className="text-sm text-text-secondary leading-relaxed">{service.delivery}</p>
                                        </div>

                                        <Link href="/about#contact" className="btn-pill">
                                            联系合作
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
