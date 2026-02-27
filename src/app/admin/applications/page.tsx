"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import type { Application } from "@/lib/storage";
import { checkAuth, logoutAdmin } from "@/lib/auth";

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 인증 확인
    checkAuth().then((authenticated) => {
      setIsChecking(false);
      if (!authenticated) {
        router.push("/admin/login");
        return;
      }
      setIsAuthed(true);
      fetchApplications();
    });
  }, [router]);

  async function fetchApplications() {
    try {
      const response = await fetch("/api/applications");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setApplications(data);
      setError(null);
    } catch (err) {
      setError("지원자 목록을 불러올 수 없습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteApplication(id: string) {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      setApplications(applications.filter((app) => app.id !== id));
      setSelectedApp(null);
    } catch (err) {
      alert("삭제에 실패했습니다.");
      console.error(err);
    }
  }

  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.studentId.includes(searchQuery),
  );

  // 인증 확인 중이거나 인증되지 않았으면 아무것도 렌더링하지 않음
  if (isChecking || !isAuthed) {
    return null;
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
              홈으로
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              지원자 관리
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 text-lg text-muted">
              총{" "}
              <span className="font-semibold text-accent">
                {applications.length}
              </span>
              명의 지원자
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <button
              onClick={async () => {
                await logoutAdmin();
                router.push("/admin/login");
              }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-current"
              >
                <path
                  d="M13 8H3m0 0l4-4m-4 4l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              로그아웃
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-2xl space-y-6">
          <>
              {/* Search */}
              <FadeIn>
                <input
                  type="text"
                  placeholder="이름, 이메일, 학번으로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
                />
              </FadeIn>

              <AnimatePresence mode="wait">
                {loading ? (
                  <FadeIn key="loading">
                    <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted">
                      로딩 중...
                    </div>
                  </FadeIn>
                ) : error ? (
                  <FadeIn key="error">
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center text-red-400">
                      {error}
                    </div>
                  </FadeIn>
                ) : applications.length === 0 ? (
                  <FadeIn key="empty">
                    <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted">
                      아직 지원자가 없습니다.
                    </div>
                  </FadeIn>
                ) : filteredApplications.length === 0 ? (
                  <FadeIn key="no-results">
                    <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted">
                      검색 결과가 없습니다.
                    </div>
                  </FadeIn>
                ) : (
                  <div key="content" className="space-y-4">
                    {filteredApplications.map((app, i) => (
                      <motion.button
                        key={app.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -2 }}
                        onClick={() => setSelectedApp(app)}
                        className="w-full text-left rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {app.name}
                            </h3>
                            <p className="mt-2 text-sm text-muted">
                              {app.department} · {app.year}
                            </p>
                            <p className="mt-1 text-xs text-muted/60">
                              학번: {app.studentId}
                            </p>
                            <p className="mt-2 text-xs text-muted/60">
                              {new Date(app.submittedAt).toLocaleString(
                                "ko-KR",
                              )}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                              상세보기
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Detail Modal */}
              <AnimatePresence>
                {selectedApp && (
                  <motion.div
                    key="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedApp(null)}
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {selectedApp && (
                  <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-y-auto"
                  >
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      className="w-full max-w-2xl relative flex flex-col max-h-[calc(100vh-120px)]"
                    >
                      <button
                        onClick={() => setSelectedApp(null)}
                        className="mb-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
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
                        닫기
                      </button>

                      <div className="overflow-y-auto pr-3">
                        <div className="rounded-2xl border border-border bg-card p-8 space-y-8">
                          {/* Header */}
                          <div>
                            <h2 className="text-2xl font-bold text-foreground break-keep">
                              {selectedApp.name}
                            </h2>
                            <p className="mt-2 text-sm text-muted">
                              {selectedApp.department} · {selectedApp.year}
                            </p>
                          </div>

                          {/* 기본 정보 */}
                          <fieldset className="rounded-2xl border border-border bg-background/50 p-6">
                            <legend className="px-2 text-lg font-bold">
                              기본 정보
                            </legend>
                            <div className="mt-4 grid gap-6 sm:grid-cols-2">
                              <ReadonlyField
                                label="이름"
                                value={selectedApp.name}
                              />
                              <ReadonlyField
                                label="학번"
                                value={selectedApp.studentId}
                              />
                              <ReadonlyField
                                label="학부(과)"
                                value={selectedApp.department}
                              />
                              <ReadonlyField
                                label="학년"
                                value={selectedApp.year}
                              />
                              <ReadonlyField
                                label="연락처"
                                value={selectedApp.phone}
                              />
                              <ReadonlyField
                                label="이메일"
                                value={selectedApp.email}
                              />
                              {selectedApp.github && (
                                <div className="sm:col-span-2">
                                  <ReadonlyField
                                    label="GitHub / 포트폴리오"
                                    value={selectedApp.github}
                                    isLink
                                  />
                                </div>
                              )}
                              {selectedApp.skills && (
                                <div className="sm:col-span-2">
                                  <ReadonlyField
                                    label="사용해본 기술"
                                    value={selectedApp.skills}
                                  />
                                </div>
                              )}
                            </div>
                          </fieldset>

                          {/* 경험 */}
                          {(selectedApp.projects ||
                            selectedApp.collaboration) && (
                            <fieldset className="rounded-2xl border border-border bg-background/50 p-6">
                              <legend className="px-2 text-lg font-bold">
                                경험
                              </legend>
                              <div className="mt-4 space-y-6">
                                {selectedApp.projects && (
                                  <ReadonlyField
                                    label="프로젝트 경험"
                                    value={selectedApp.projects}
                                  />
                                )}
                                {selectedApp.collaboration && (
                                  <ReadonlyField
                                    label="협업 경험"
                                    value={selectedApp.collaboration}
                                  />
                                )}
                              </div>
                            </fieldset>
                          )}

                          {/* 지원 동기 */}
                          <fieldset className="rounded-2xl border border-border bg-background/50 p-6">
                            <legend className="px-2 text-lg font-bold">
                              지원 동기
                            </legend>
                            <div className="mt-4 space-y-6">
                              <ReadonlyField
                                label="왜 SYU KR에 지원했나요?"
                                value={selectedApp.motivation}
                              />
                              {selectedApp.ideas && (
                                <ReadonlyField
                                  label="팀에 합류하고 하고 싶은 아이디어나 계획"
                                  value={selectedApp.ideas}
                                />
                              )}
                            </div>
                          </fieldset>

                          {/* 제출 정보 */}
                          <div className="rounded-2xl border border-border bg-background/50 p-6">
                            <p className="text-xs font-medium text-muted mb-2">
                              제출 시간
                            </p>
                            <p className="text-foreground">
                              {new Date(selectedApp.submittedAt).toLocaleString(
                                "ko-KR",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 삭제 버튼 (모달 밖에 고정) */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => deleteApplication(selectedApp.id)}
                        className="mt-4 w-full rounded-lg bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20"
                      >
                        삭제
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
        </div>
      </section>
    </main>
  );
}

function ReadonlyField({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted">{label}</label>
      {isLink ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-accent hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-foreground whitespace-pre-wrap break-words">
          {value}
        </p>
      )}
    </div>
  );
}
