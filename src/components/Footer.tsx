export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} SYU KR. All rights reserved.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="/privacy"
              className="text-muted hover:text-foreground transition-colors"
            >
              개인정보 처리방침
            </a>
            <p>
              Founded by{" "}
              <span className="font-medium text-foreground">김상윤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
