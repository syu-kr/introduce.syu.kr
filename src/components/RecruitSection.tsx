"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

// const roles = [
//   {
//     title: "프론트엔드",
//     emoji: "🎨",
//     items: [
//       "React / Next.js 경험",
//       "UI 감각이 있는 사람",
//       "성능을 고민해본 사람",
//     ],
//   },
//   {
//     title: "백엔드",
//     emoji: "⚙️",
//     items: ["API 설계 경험", "서버 운영 경험", "배포 파이프라인 경험"],
//   },
// ];

const common = [
  "결과물을 만드는 사람",
  "말보다 코드로 보여주는 사람",
  "함께 성장하고 싶은 사람",
  "전공 상관없이 개발에 관심 있는 사람",
];

export default function RecruitSection() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            We&apos;re Hiring
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            어떤 사람을 찾나요
          </h2>
        </FadeIn>

        {/* <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {roles.map((role, i) => (
            <FadeIn key={role.title} delay={0.15 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40"
              >
                <span className="text-3xl">{role.emoji}</span>
                <h3 className="mt-4 text-xl font-bold">{role.title}</h3>
                <ul className="mt-4 space-y-3">
                  {role.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div> */}

        <FadeIn delay={0.35}>
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold">🤝 공통</h3>
            <ul className="mt-4 space-y-3">
              {common.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
