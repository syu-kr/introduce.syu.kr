"use client";

import FadeIn from "@/components/FadeIn";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="relative px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <FadeIn>
            <a
              href="/apply"
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
              지원 페이지로 돌아가기
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              개인정보 처리방침
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 text-sm text-muted">
              최종 수정일: 2026년 2월 27일
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-3xl space-y-12">
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">
                1. 개인정보의 수집 및 이용 목적
              </h2>
              <p className="text-muted leading-relaxed">
                SYU KR(이하 &quot;팀&quot;)은 지원자 선발 및 합격자 연락을 위해
                필요한 최소한의 개인정보를 수집합니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">
                2. 수집하는 개인정보 항목
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    [필수항목]
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    이름, 학번, 학부(과), 학년, 연락처(휴대전화), 이메일, 지원
                    동기
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    [선택항목]
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    GitHub 주소 또는 포트폴리오 링크, 사용해본 기술 스택,
                    프로젝트 경험, 협업 경험, 팀 합류 후 아이디어/계획
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">
                3. 개인정보의 보유 및 이용 기간
              </h2>
              <p className="text-muted leading-relaxed mb-3">
                수집된 개인정보는{" "}
                <span className="font-semibold text-foreground">
                  모집 종료 시 즉시 파기
                </span>
                됩니다.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                단, 합격자의 경우 팀 활동에 필요한 최소한의 정보(이름, 연락처,
                이메일)는 팀원 퇴사 시까지 보유되며, 퇴사 후 즉시 파기됩니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">
                4. 개인정보의 파기 절차 및 방법
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    파기 절차
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    지원자가 제출한 정보는 목적이 달성된 후 내부 방침에 따라
                    즉시 파기됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    파기 방법
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는
                    기술적 방법을 사용하여 삭제합니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">
                5. 개인정보의 제3자 제공
              </h2>
              <p className="text-muted leading-relaxed">
                팀은 원칙적으로 지원자의 개인정보를 외부에 제공하지 않습니다.
                다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="mt-3 space-y-2 text-muted text-sm">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>지원자가 사전에 동의한 경우</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와
                    방법에 따라 수사기관의 요구가 있는 경우
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">
                6. 정보주체의 권리·의무 및 행사방법
              </h2>
              <p className="text-muted leading-relaxed">
                지원자는 언제든지 등록되어 있는 본인의 개인정보를 조회하거나
                수정, 삭제, 처리 정지를 요구할 수 있습니다. 요청은 팀 이메일
                또는 연락처를 통해 가능합니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold mb-4">7. 개인정보 보호책임자</h2>
              <div className="mt-4 space-y-2 text-muted text-sm">
                <p>
                  <span className="font-semibold text-foreground">책임자:</span>{" "}
                  김상윤
                </p>
                <p>
                  <span className="font-semibold text-foreground">소속:</span>{" "}
                  SYU KR
                </p>
                <p className="mt-4 text-xs text-muted/70">
                  개인정보 처리에 관한 문의사항이 있으시면 위 연락처로
                  문의해주시기 바랍니다.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <p className="text-sm text-muted leading-relaxed">
                본 개인정보 처리방침은 2026년 2월 27일부터 적용됩니다. 법령,
                정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을
                시에는 변경사항을 사전에 공지하도록 하겠습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
