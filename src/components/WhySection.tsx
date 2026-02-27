"use client";

import FadeIn from "@/components/FadeIn";

const points = [
  {
    before: "포트폴리오 한 줄이 아니라",
    after: "실제 사용자 수천 명.",
  },
  {
    before: "학교 프로젝트가 아니라",
    after: "실제 운영 서비스.",
  },
  {
    before: "동아리가 아니라",
    after: "작은 스타트업.",
  },
];

export default function WhySection() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Why Us
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            왜 SYU KR인가
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {points.map((point, i) => (
            <FadeIn key={i} delay={0.15 * i}>
              <div>
                <p className="text-xl text-muted sm:text-2xl">{point.before}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {point.after}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
