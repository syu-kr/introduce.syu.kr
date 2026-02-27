"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="apply" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            함께 만들어갈 사람을
            <br />
            기다리고 있습니다.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            기획부터 배포, 운영까지.
            <br />
            실제 서비스를 같이 만들 팀원을 찾습니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-10 text-lg font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              지원하기 →
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
