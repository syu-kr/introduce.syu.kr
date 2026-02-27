"use client";

import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "지원서 제출",
    description: "간단한 자기소개와 관심 분야를 알려주세요.",
  },
  {
    number: "02",
    title: "인터뷰",
    description: "서로를 알아가는 편한 대화를 나눕니다.",
  },
  {
    number: "03",
    title: "합류",
    description: "환영합니다! 함께 만들어갑시다.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Process
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            합류 과정
          </h2>
        </FadeIn>

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.12 * i} className="h-full">
              <div className="relative h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40">
                <span className="text-4xl font-black text-accent/20">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
