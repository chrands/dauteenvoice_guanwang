import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { siteConfig, blogPosts, services } from '@/data/siteConfig';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="!pt-20 !pb-8 md:!pt-24 md:!pb-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">
                {siteConfig.name}
              </h1>
              <p className="text-base md:text-lg text-text-secondary max-w-lg mb-6 md:mb-8 leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="flex gap-3">
                <Link href="/about#contact" className="btn-pill">
                  联系合作
                </Link>
                <Link href="/services" className="btn-pill">
                  查看服务
                </Link>
              </div>
            </div>
            <div className="image-placeholder aspect-[4/3] mt-4 lg:mt-0">
              Hero 图片位置
            </div>
          </div>
        </Container>
      </Section>

      <hr className="divider max-w-[900px] mx-auto px-6" />

      {/* Mission Statement */}
      <Section className="!py-8 md:!py-12">
        <Container>
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-text-secondary max-w-2xl">
            我们相信，医疗技术的进步不应止步于实验室，而应通过高质量的传播与培训，触达每一位前线医护。
          </p>
        </Container>
      </Section>

      <hr className="divider max-w-[900px] mx-auto px-6" />

      {/* What We Do */}
      <Section>
        <Container>
          <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-10">我们做什么</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="card group flex flex-col">
                <div className="image-placeholder aspect-[16/9] mb-4">
                  服务配图
                </div>
                <Tag className="mb-3">{service.tag}</Tag>
                <h3 className="font-serif text-lg md:text-xl mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {service.target}
                </p>
                <Link
                  href="/services"
                  className="inline-block text-sm text-text-muted hover:text-accent transition-colors"
                >
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <hr className="divider max-w-[900px] mx-auto px-6" />

      {/* MVV Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="card">
              <p className="text-xs md:text-sm text-text-muted mb-2 md:mb-3">使命</p>
              <p className="font-serif text-base md:text-lg leading-relaxed">{siteConfig.mission}</p>
            </div>
            <div className="card">
              <p className="text-xs md:text-sm text-text-muted mb-2 md:mb-3">愿景</p>
              <p className="font-serif text-base md:text-lg leading-relaxed">{siteConfig.vision}</p>
            </div>
            <div className="card sm:col-span-2 lg:col-span-1">
              <p className="text-xs md:text-sm text-text-muted mb-2 md:mb-3">价值观</p>
              <p className="font-serif text-base md:text-lg leading-relaxed">{siteConfig.values}</p>
            </div>
          </div>
        </Container>
      </Section>

      <hr className="divider max-w-[900px] mx-auto px-6" />

      {/* Featured Image */}
      <Section>
        <Container>
          <div className="image-placeholder aspect-[21/9] md:aspect-[21/7] !min-h-[150px] md:!min-h-[200px]">
            品牌展示图 / 团队照片
          </div>
        </Container>
      </Section>

      <hr className="divider max-w-[900px] mx-auto px-6" />

      {/* Blog List */}
      <Section>
        <Container>
          <div className="flex justify-between items-baseline mb-6 md:mb-10">
            <h2 className="font-serif text-2xl md:text-3xl">最新文章</h2>
            <Link href="/blog" className="text-sm text-text-muted hover:text-accent">
              查看全部 →
            </Link>
          </div>
          <div className="space-y-4 md:space-y-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="card group">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="image-placeholder w-full sm:w-32 md:w-48 aspect-[16/9] sm:aspect-square shrink-0 !min-h-[120px] sm:!min-h-0">
                      封面
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                        <Tag>{post.tag}</Tag>
                        <span className="text-xs text-text-muted font-mono">{post.date}</span>
                      </div>
                      <h3 className="font-serif text-base md:text-lg lg:text-xl group-hover:text-accent transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 hidden sm:block">
                        {post.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
