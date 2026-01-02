import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { blogPosts, siteConfig } from '@/data/siteConfig';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find(p => p.id === id);
    if (!post) return {};
    return {
        title: post.title,
        description: post.summary,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <Section className="!pt-20 !pb-6 md:!pt-24 md:!pb-8">
                <Container>
                    <Link
                        href="/blog"
                        className="text-sm text-text-muted hover:text-foreground mb-8 md:mb-12 inline-block transition-colors"
                    >
                        ← 返回文章列表
                    </Link>

                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
                        <Tag>{post.tag}</Tag>
                        <span className="text-xs text-text-muted font-mono">{post.date}</span>
                    </div>

                    <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 md:mb-8">
                        {post.title}
                    </h1>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section className="!py-8 md:!py-12">
                <Container>
                    <div className="prose max-w-none text-sm md:text-base">
                        <p className="text-base md:text-lg text-text-secondary border-l-2 border-accent pl-4 md:pl-6 mb-8 md:mb-12 leading-relaxed">
                            {post.summary}
                        </p>

                        <p className="leading-relaxed mb-6">
                            本文正在数字化处理中，完整内容即将上线。稻田蛙声致力于提供最严谨的技术传播内容，每一篇深度文章都经过专家委员会的审核与校对。
                        </p>

                        <h2 className="font-serif text-xl md:text-2xl mb-4 mt-8">关于新质诊疗技术</h2>
                        <p className="leading-relaxed mb-6">
                            新质诊疗技术不仅是工具的迭代，更是临床思维的重塑。在外科领域，这意味着从经验驱动向数据与精准手术的转型；在病理领域，这意味着从形态学观察向数字化、分子化的延伸。
                        </p>

                        <p className="leading-relaxed mb-6">
                            我们通过「稻田蛙声」这一平台，旨在构建一个开放、互动、生长的技术生态。不仅是单向的传播，更是多维的协同。
                        </p>

                        <blockquote className="border-l-2 border-accent pl-4 md:pl-6 py-3 md:py-4 my-6 md:my-8 text-text-secondary bg-accent/5 rounded-r-lg">
                            "只做有利于医患的诊疗技术传播！" —— 稻田蛙声核心价值观
                        </blockquote>

                        <p className="leading-relaxed">保持关注，获取更多专业见解。</p>
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section className="!py-8 md:!py-12">
                <Container>
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-between">
                        <div>
                            <p className="text-xs md:text-sm text-text-muted mb-2 md:mb-3">分享本文</p>
                            <div className="flex gap-3 md:gap-4">
                                <button className="text-sm hover:text-accent transition-colors">微信</button>
                                <button className="text-sm hover:text-accent transition-colors">复制链接</button>
                            </div>
                        </div>
                        <div className="max-w-sm">
                            <p className="text-xs md:text-sm text-text-muted mb-1 md:mb-2">免责声明</p>
                            <p className="text-xs text-text-muted leading-relaxed">
                                {siteConfig.disclaimer}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </article>
    );
}
