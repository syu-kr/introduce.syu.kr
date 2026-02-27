"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { loginAdmin } from "@/lib/auth";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await loginAdmin(password);
      if (!success) {
        setError("비밀번호가 틀렸습니다.");
        setIsLoading(false);
        return;
      }

      router.push("/admin/applications");
    } catch (err) {
      setError("로그인에 실패했습니다.");
      console.error(err);
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden flex items-center justify-center">
      {/* Background gradient blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <FadeIn>
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-current"
            >
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            홈으로
          </a>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            관리자 로그인
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-muted">
            지원자 관리 페이지에 접근하려면 인증이 필요합니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-muted mb-2"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
                disabled={isLoading}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-500/20 bg-red-500/5 p-3 text-sm text-red-400"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full h-12 rounded-xl bg-accent px-4 font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </main>
  );
}
