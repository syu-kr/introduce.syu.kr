"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background gradient blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* <FadeIn delay={0.1}>
          <p className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted">
            삼육대학교 실전 개발 팀
          </p>
        </FadeIn> */}

        <FadeIn delay={0.25}>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl break-keep">
            학교에서
            <br />
            <span className="text-accent">제일 많이 쓰이는 서비스</span>를
            <br />
            만드는 팀.
          </h1>
        </FadeIn>

        {/* <FadeIn delay={0.45}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted sm:text-xl">
            SYU KR은 삼육대학교 학생들이 직접 만드는
            <br className="hidden sm:block" /> 실전 개발 팀입니다.
          </p>
        </FadeIn> */}

        <FadeIn delay={0.6}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              지원하기
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-base font-medium text-foreground transition-colors hover:bg-card"
            >
              우리가 만든 것
            </motion.a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1} className="absolute bottom-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs">스크롤</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-muted"
          >
            <path
              d="M8 3v10m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </FadeIn>
    </section>
  );
}
