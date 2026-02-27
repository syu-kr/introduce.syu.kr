"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SYU 공지 알리미",
    description: "학교 공지사항을 놓치지 않게 알려주는 서비스",
    stat: "3일 이내 공지 알림 전송",
    emoji: "🔔",
  },
  {
    name: "에브리타임 시간표 공식 제공",
    description: "매 학기 시간표 데이터를 수집하고 검증하는 파이프라인",
    stat: "매 학기 데이터 수집 및 검증",
    emoji: "🗂️",
  },
  {
    name: "시간표 마법사",
    description: "선택한 강의를 시간표로 한눈에 보여주는 서비스",
    stat: "누적 5만+ 페이지뷰",
    emoji: "📅",
  },
  {
    name: "수강신청 장바구니 경쟁률",
    description: "실시간, 이전 수강신청 경쟁률 조회 서비스",
    stat: "매 학기 수천 명 사용",
    emoji: "📊",
  },
  {
    name: "모의 수강신청",
    description: "실제 수강신청처럼 미리 연습해볼 수 있는 서비스",
    stat: "수강신청 전 필수 코스",
    emoji: "🖱️",
  },
  {
    name: "셔틀버스 도착시간 안내",
    description: "셔틀버스의 실시간 위치와 도착 예정시간을 제공하는 서비스",
    stat: "실시간 위치 추적 및 도착 시간 안내",
    emoji: "🚌",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Our Products
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            SYU KR이 만든 대표 작품
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-muted"></p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={0.15 * i}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40"
              >
                <div>
                  <span className="text-4xl">{project.emoji}</span>
                  <h3 className="mt-4 text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 text-muted">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  <span className="text-sm font-medium text-green-400">
                    {project.stat}
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
