"use client";

import FadeIn from "@/components/FadeIn";

const lines = [
  "실제 서비스를 만듭니다.",
  null,
  "기획하고",
  "설계하고",
  "배포하고",
  "운영합니다.",
  null,
  "문제도 직접 겪습니다.",
  "그래서 빠르게 성장합니다.",
];

export default function TeamSection() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Who We Are
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            우리는 이런 팀입니다
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-0">
          {lines.map((line, i) =>
            line === null ? (
              <div key={`sep-${i}`} className="h-10" />
            ) : (
              <FadeIn key={i} delay={0.08 * i}>
                <p
                  className={`text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl md:text-4xl ${
                    [
                      "기획하고",
                      "설계하고",
                      "배포하고",
                      "운영합니다.",
                    ].includes(line)
                      ? "text-muted"
                      : ""
                  } ${line === "운영합니다." ? "text-foreground!" : ""} ${
                    line === "그래서 빠르게 성장합니다." ? "text-accent!" : ""
                  }`}
                >
                  {line}
                </p>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
