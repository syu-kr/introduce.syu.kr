"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

interface FormData {
  name: string;
  studentId: string;
  department: string;
  year: string;
  phone: string;
  email: string;
  github: string;
  skills: string;
  projects: string;
  collaboration: string;
  motivation: string;
  ideas: string;
}

const initialForm: FormData = {
  name: "",
  studentId: "",
  department: "",
  year: "",
  phone: "",
  email: "",
  github: "",
  skills: "",
  projects: "",
  collaboration: "",
  motivation: "",
  ideas: "",
};

const yearOptions = ["1학년", "2학년", "3학년", "4학년", "기타"];

export default function ApplyPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!privacyConsent) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "지원서 제출에 실패했습니다.");
      }

      setSubmitted(true);
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "지원서 제출에 실패했습니다.",
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="relative px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
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
              홈으로 돌아가기
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl break-keep">
              SYU KR에
              <br />
              <span className="text-accent">합류하기</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted break-keep">
              개발만 하는 곳이 아닙니다.
              <br />
              같이 공부하고, 같이 만들고, 같이 성장하는 팀입니다.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-12 text-center"
              >
                <div className="text-5xl">🎉</div>
                <h2 className="mt-6 text-2xl font-bold">
                  지원이 완료되었습니다!
                </h2>
                <p className="mt-4 text-muted">
                  검토 후 연락드리겠습니다. 감사합니다.
                </p>
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  홈으로
                </motion.a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
              >
                {/* 기본 정보 */}
                <FadeIn delay={0.1}>
                  <fieldset className="rounded-2xl border border-border bg-card p-6 sm:p-10">
                    <legend className="px-3 text-xl font-bold">
                      기본 정보
                    </legend>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <InputField
                        label="이름"
                        required
                        value={form.name}
                        onChange={(v) => update("name", v)}
                        placeholder="홍길동"
                      />
                      <InputField
                        label="학번"
                        required
                        value={form.studentId}
                        onChange={(v) => update("studentId", v)}
                        placeholder="2026000123"
                      />
                      <InputField
                        label="학부(과)"
                        required
                        value={form.department}
                        onChange={(v) => update("department", v)}
                        placeholder="컴퓨터공학부"
                      />
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-muted">
                          학년 <span className="text-accent">*</span>
                        </label>
                        <select
                          required
                          value={form.year}
                          onChange={(e) => update("year", e.target.value)}
                          className="h-12 rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors focus:border-accent"
                        >
                          <option value="" disabled>
                            선택해주세요
                          </option>
                          {yearOptions.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>
                      <InputField
                        label="연락처"
                        required
                        value={form.phone}
                        onChange={(v) => update("phone", v)}
                        placeholder="010-0000-0000"
                        type="tel"
                      />
                      <InputField
                        label="이메일"
                        required
                        value={form.email}
                        onChange={(v) => update("email", v)}
                        placeholder="example@naver.com"
                        type="email"
                      />
                      <InputField
                        label="GitHub / 포트폴리오"
                        value={form.github}
                        onChange={(v) => update("github", v)}
                        placeholder="https://github.com/username"
                        optional
                      />
                      <InputField
                        label="사용해본 언어"
                        value={form.skills}
                        onChange={(v) => update("skills", v)}
                        placeholder="React, Python, Java 등"
                        optional
                      />
                    </div>
                  </fieldset>
                </FadeIn>

                {/* 경험 */}
                <FadeIn delay={0.2}>
                  <fieldset className="rounded-2xl border border-border bg-card p-6 sm:p-10">
                    <legend className="px-3 text-xl font-bold">경험</legend>
                    <div className="mt-6 space-y-6">
                      <TextareaField
                        label="만들어본 프로젝트가 있다면 자유롭게 작성해주세요"
                        value={form.projects}
                        onChange={(v) => update("projects", v)}
                        placeholder="어떤 프로젝트를 어떤 기술로 만들었는지 편하게 적어주세요. 없으면 비워두셔도 됩니다!"
                        optional
                        maxLength={200}
                      />
                      <TextareaField
                        label="협업 경험이 있다면 작성해주세요"
                        value={form.collaboration}
                        onChange={(v) => update("collaboration", v)}
                        placeholder="팀 프로젝트, 해커톤, 스터디 등 어떤 형태든 괜찮아요. 없으면 비워두셔도 됩니다!"
                        optional
                        maxLength={200}
                      />
                    </div>
                  </fieldset>
                </FadeIn>

                {/* 지원 동기 */}
                <FadeIn delay={0.3}>
                  <fieldset className="rounded-2xl border border-border bg-card p-6 sm:p-10">
                    <legend className="px-3 text-xl font-bold">
                      지원 동기
                    </legend>
                    <div className="mt-6 space-y-6">
                      <TextareaField
                        label="왜 SYU KR에 지원했나요?"
                        required
                        value={form.motivation}
                        onChange={(v) => update("motivation", v)}
                        placeholder="편하게 적어주세요. 거창하지 않아도 됩니다!"
                        maxLength={400}
                      />
                      <TextareaField
                        label="팀에 합류하고 하고 싶은 아이디어나 계획이 있나요?"
                        value={form.ideas}
                        onChange={(v) => update("ideas", v)}
                        placeholder="만들어보고 싶은 서비스, 배우고 싶은 기술, 또는 팀에서 하고 싶은 역할 등 자유롭게 적어주세요!"
                        optional
                        maxLength={200}
                      />
                    </div>
                  </fieldset>
                </FadeIn>

                {/* 안내 문구 */}
                <FadeIn delay={0.35}>
                  <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                    <p className="text-sm text-muted leading-relaxed break-keep">
                      SYU KR은 개발만 하는 곳이 아닙니다. 같이 공부하고, 서로
                      배우고, 함께 성장하는 팀입니다. 아직 잘 모르더라도
                      괜찮습니다. 배우겠다는 마음만 있으면 충분합니다.
                    </p>
                  </div>
                </FadeIn>

                {/* 개인정보 수집 및 이용 동의 */}
                <FadeIn delay={0.38}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-base font-bold mb-4">
                      개인정보 수집 및 이용 동의
                    </h3>
                    <div className="space-y-3 text-sm text-muted mb-4">
                      <div className="flex gap-2">
                        <span className="text-muted/70">•</span>
                        <div>
                          <span className="font-medium text-foreground">
                            수집 항목:
                          </span>{" "}
                          이름, 학번, 학부(과), 학년, 연락처, 이메일,
                          GitHub/포트폴리오, 사용 기술, 프로젝트 경험, 협업
                          경험, 지원 동기, 아이디어
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted/70">•</span>
                        <div>
                          <span className="font-medium text-foreground">
                            수집 목적:
                          </span>{" "}
                          지원자 심사 및 선발, 합격자 연락
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted/70">•</span>
                        <div>
                          <span className="font-medium text-foreground">
                            보유 기간:
                          </span>{" "}
                          모집 종료 시 즉시 파기
                        </div>
                      </div>
                    </div>
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline"
                    >
                      개인정보 처리방침 자세히 보기 →
                    </a>
                    <label className="mt-4 flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="h-4 w-4 cursor-pointer accent-accent"
                      />
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                        개인정보 수집 및 이용에 동의합니다.{" "}
                        <span className="text-accent">*</span>
                      </span>
                    </label>
                  </div>
                </FadeIn>

                {/* 제출 버튼 */}
                <FadeIn delay={0.42}>
                  <div className="flex justify-center">
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.04 }}
                      whileTap={{ scale: isLoading ? 1 : 0.97 }}
                      className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-12 text-lg font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "제출 중..." : "지원서 제출하기"}
                    </motion.button>
                  </div>
                </FadeIn>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

/* ─── Reusable Field Components ─── */

function InputField({
  label,
  value,
  onChange,
  placeholder,
  required,
  optional,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-muted">
        {label} {required && <span className="text-accent">*</span>}
        {optional && <span className="text-xs text-muted/60">(선택)</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  required,
  optional,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-muted break-keep">
        {label} {required && <span className="text-accent">*</span>}
        {optional && <span className="text-xs text-muted/60">(선택)</span>}
      </label>
      <textarea
        required={required}
        value={value}
        onChange={(e) => {
          if (maxLength && e.target.value.length > maxLength) return;
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        rows={5}
        maxLength={maxLength}
        className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
      />
      {maxLength && (
        <div className="text-xs text-muted/60 text-right">
          <span
            className={
              value.length >= maxLength ? "text-accent font-medium" : ""
            }
          >
            {value.length}
          </span>
          <span>/{maxLength}자</span>
        </div>
      )}
    </div>
  );
}
