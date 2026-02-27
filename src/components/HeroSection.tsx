"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const floatingItems = [
  {
    content: "</>",
    className: "text-accent font-mono font-bold text-lg",
    style: { top: "14%", left: "7%" },
    mobileStyle: { top: "8%", left: "5%" },
    duration: 6,
    delay: 0,
    rotate: -12,
    mobileVisible: true,
  },
  {
    content: "{ }",
    className: "text-accent/70 font-mono font-bold text-xl",
    style: { top: "20%", right: "11%" },
    mobileStyle: { top: "10%", right: "5%" },
    duration: 7,
    delay: 1,
    rotate: 15,
    mobileVisible: true,
  },
  {
    content: "()=>",
    className: "text-blue-400/60 font-mono font-semibold text-sm",
    style: { top: "68%", left: "4%" },
    duration: 8,
    delay: 0.5,
    rotate: 8,
  },
  {
    content: "git push",
    className: "text-orange-400/50 font-mono font-bold text-xs",
    style: { top: "72%", right: "7%" },
    mobileStyle: { top: "78%", right: "8%" },
    duration: 5.5,
    delay: 2,
    rotate: -20,
    mobileVisible: true,
  },
  {
    content: "~/dev",
    className: "text-green-400/50 font-mono font-bold text-sm",
    style: { top: "38%", left: "2%" },
    duration: 9,
    delay: 1.5,
    rotate: 5,
  },
  {
    content: "npm run",
    className: "text-red-400/45 font-mono font-bold text-xs",
    style: { top: "48%", right: "3%" },
    duration: 6.5,
    delay: 3,
    rotate: -10,
  },
  {
    content: "REST",
    className: "text-cyan-400/45 font-mono font-bold text-xs",
    style: { top: "80%", left: "22%" },
    duration: 6,
    delay: 0.3,
    rotate: -15,
  },
  {
    content: "async",
    className: "text-violet-400/40 font-mono font-semibold text-xs",
    style: { top: "10%", left: "30%" },
    duration: 10,
    delay: 4,
    rotate: 22,
  },
  {
    content: "import",
    className: "text-pink-400/35 font-mono font-semibold text-xs",
    style: { top: "82%", right: "18%" },
    duration: 7.8,
    delay: 1.2,
    rotate: -7,
  },
  {
    content: ".tsx",
    className: "text-blue-300/45 font-mono font-bold text-sm",
    style: { top: "55%", right: "6%" },
    mobileStyle: { top: "82%", left: "5%" },
    duration: 8.2,
    delay: 2.8,
    rotate: 13,
    mobileVisible: true,
  },
  {
    content: "deploy",
    className: "text-emerald-400/40 font-mono font-bold text-xs",
    style: { top: "25%", left: "18%" },
    duration: 7.3,
    delay: 3.8,
    rotate: -18,
  },
  {
    content: "docker",
    className: "text-sky-400/35 font-mono font-bold text-xs",
    style: { top: "62%", right: "20%" },
    duration: 9.2,
    delay: 4.5,
    rotate: 10,
  },
  {
    content: "useState",
    className: "text-indigo-400/35 font-mono font-semibold text-xs",
    style: { top: "42%", left: "12%" },
    duration: 8.8,
    delay: 5,
    rotate: -5,
  },
  {
    // Terminal
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    className: "text-accent/40",
    style: { top: "16%", right: "24%" },
    duration: 7.5,
    delay: 0.8,
    rotate: 10,
    mobileVisible: true,
    mobileStyle: { top: "75%", left: "8%" },
  },
  {
    // Database
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    className: "text-purple-400/40",
    style: { top: "58%", left: "16%" },
    duration: 8.5,
    delay: 2.5,
    rotate: -6,
  },
  {
    // Git branch
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
    className: "text-orange-400/35",
    style: { top: "32%", right: "4%" },
    duration: 7,
    delay: 1.8,
    rotate: 18,
  },
  {
    // Code brackets
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    className: "text-accent/30",
    style: { top: "52%", left: "6%" },
    duration: 7.2,
    delay: 3.5,
    rotate: -8,
  },
  {
    // Cloud / server
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    className: "text-sky-400/30",
    style: { top: "75%", right: "25%" },
    duration: 9,
    delay: 1.4,
    rotate: 7,
  },
  {
    // CPU / chip
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    className: "text-yellow-400/30",
    style: { top: "28%", left: "22%" },
    duration: 8.3,
    delay: 3.2,
    rotate: -14,
  },
  {
    // Lock / security
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    className: "text-emerald-400/30",
    style: { top: "45%", right: "15%" },
    duration: 6.8,
    delay: 4.2,
    rotate: 11,
  },
  {
    // Wifi / network
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    className: "text-teal-400/25",
    style: { top: "85%", left: "10%" },
    duration: 7.6,
    delay: 2.2,
    rotate: -9,
  },
  {
    // Rocket
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
      </svg>
    ),
    className: "text-rose-400/30",
    style: { top: "8%", right: "15%" },
    mobileStyle: { top: "5%", right: "8%" },
    duration: 6.4,
    delay: 0.6,
    rotate: 25,
    mobileVisible: true,
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background gradient blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* 3D Floating dev elements – desktop */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute select-none"
            style={{
              ...item.style,
              perspective: "800px",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -18, 0, 12, 0],
              rotateX: [0, item.rotate * 0.5, 0, -item.rotate * 0.3, 0],
              rotateY: [0, item.rotate, 0, -item.rotate * 0.6, 0],
              rotateZ: [0, item.rotate * 0.2, 0, -item.rotate * 0.1, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: item.delay },
              scale: { duration: 1, delay: item.delay },
              y: {
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotateX: {
                duration: item.duration * 1.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotateY: {
                duration: item.duration * 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotateZ: {
                duration: item.duration * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
            }}
          >
            <div
              className={`rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${item.className}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {"icon" in item && item.icon ? item.icon : item.content}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Floating dev elements – mobile (subset) */}
      <div className="pointer-events-none absolute inset-0 sm:hidden">
        {floatingItems
          .filter((item) => item.mobileVisible)
          .map((item, i) => (
            <motion.div
              key={i}
              className="absolute select-none"
              style={{
                ...(item.mobileStyle || item.style),
                perspective: "800px",
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{
                opacity: 0.7,
                scale: 0.85,
                y: [0, -12, 0, 8, 0],
                rotateX: [0, item.rotate * 0.3, 0, -item.rotate * 0.2, 0],
                rotateY: [0, item.rotate * 0.6, 0, -item.rotate * 0.4, 0],
                rotateZ: [0, item.rotate * 0.15, 0, -item.rotate * 0.08, 0],
              }}
              transition={{
                opacity: { duration: 1.2, delay: item.delay },
                scale: { duration: 1.2, delay: item.delay },
                y: {
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
                rotateX: {
                  duration: item.duration * 1.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
                rotateY: {
                  duration: item.duration * 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
                rotateZ: {
                  duration: item.duration * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
              }}
            >
              <div
                className={`rounded-xl border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${item.className}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {"icon" in item && item.icon ? item.icon : item.content}
              </div>
            </motion.div>
          ))}
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
