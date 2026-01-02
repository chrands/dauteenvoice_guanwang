import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { academyInfo } from '@/data/siteConfig';
import Link from 'next/link';

export const metadata = {
    title: "培训基地",
    description: "医联研一体化赋能生态，打造专业化医护培训基地。",
};

export default function AcademyPage() {
    return (
        <>
            <Section className="!pt-20 !pb-8 md:!pt-24 md:!pb-12">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <Tag className="mb-3 md:mb-4">稻田蛙声学院</Tag>
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">{academyInfo.title}</h1>
                            <p className="text-base md:text-lg text-text-secondary max-w-lg leading-relaxed">
                                {academyInfo.description}
                            </p>
                        </div>
                        <div className="image-placeholder aspect-[4/3]">
                            培训基地主视觉
                        </div>
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section>
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {academyInfo.modules.map((module, index) => (
                            <div key={index} className="card">
                                <p className="text-xs md:text-sm text-text-muted mb-4 md:mb-6">{module.title}</p>
                                <ul className="space-y-2 md:space-y-3">
                                    {module.items.map((item, idx) => (
                                        <li key={idx} className="font-serif text-base md:text-lg leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            {/* Gallery */}
            <Section>
                <Container>
                    <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8">培训环境</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        <div className="image-placeholder aspect-square !min-h-0">培训教室</div>
                        <div className="image-placeholder aspect-square !min-h-0">实操场地</div>
                        <div className="image-placeholder aspect-square !min-h-0">设备展示</div>
                        <div className="image-placeholder aspect-square !min-h-0">学员风采</div>
                    </div>
                </Container>
            </Section>

            <hr className="divider max-w-[900px] mx-auto px-6" />

            <Section>
                <Container>
                    <h2 className="font-serif text-2xl md:text-3xl mb-4 md:mb-6">当前项目</h2>
                    <p className="text-text-muted text-sm md:text-base mb-6 md:mb-10">我们的课程持续迭代中，旨在覆盖新质诊疗全技术链路。</p>

                    <div className="space-y-3 md:space-y-4">
                        {academyInfo.courses.map((course, index) => (
                            <div key={index} className="card group">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                    <div className="image-placeholder w-full sm:w-24 md:w-32 aspect-video sm:aspect-square shrink-0 !min-h-[80px] sm:!min-h-0">
                                        封面
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-serif text-base md:text-lg group-hover:text-accent transition-colors line-clamp-2">{course.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                                        <Tag>{course.category}</Tag>
                                        <span className={`text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-full border whitespace-nowrap ${course.status === '可合作'
                                            ? 'border-green-400 text-green-700 bg-green-50'
                                            : course.status === '筹备中'
                                                ? 'border-amber-400 text-amber-700 bg-amber-50'
                                                : 'border-border-light text-text-muted bg-transparent'
                                            }`}>
                                            {course.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-10">
                        <Link href="/about#contact" className="btn-pill">
                            洽谈合作
                        </Link>
                    </div>
                </Container>
            </Section>
        </>
    );
}
