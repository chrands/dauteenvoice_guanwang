import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { blogPosts } from '@/data/siteConfig';
import Link from 'next/link';

export const metadata = {
    title: "文章",
    description: "分享外科、病理及技术传播领域的最新见解与行业观察。",
};

export default function BlogPage() {
    const tags = ["全部", "外科", "病理", "培训", "传播", "行业观察"];

    return (
        <>
            <Section className="!pt-20 !pb-8 md:!pt-24 md:!pb-12">
                <Container>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">文章</h1>
                    <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
                        分享外科、病理及技术传播领域的最新见解与行业观察。
                    </p>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section className="!pt-6 md:!pt-8">
                <Container>
                    <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                className={`text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full border transition-colors ${tag === "全部"
                                        ? "bg-foreground text-background border-foreground"
                                        : "border-border-light text-text-muted hover:border-foreground hover:text-foreground"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="card group">
                                <Link href={`/blog/${post.id}`} className="block">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                            <Tag>{post.tag}</Tag>
                                            <span className="text-xs text-text-muted font-mono">{post.date}</span>
                                        </div>
                                        <h2 className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 md:line-clamp-3">
                                            {post.summary}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
