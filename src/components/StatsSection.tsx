"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Since",
    value: "2023",
    suffix: "",
  },
  {
    label: "누적 사용자",
    value: 53000,
    suffix: "+",
    animate: true,
  },
];

function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-2">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-accent/40"
              >
                <div className="text-4xl font-bold text-accent sm:text-5xl">
                  {stat.animate && typeof stat.value === "number" ? (
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="mt-3 text-sm font-medium text-muted">
                  {stat.label}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
