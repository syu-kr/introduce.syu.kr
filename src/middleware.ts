import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // POST /api/applications (지원서 제출)은 인증 불필요
  if (
    pathname === "/api/applications" &&
    request.method === "POST"
  ) {
    return NextResponse.next();
  }

  // 나머지 admin API 보호
  const isProtectedApi =
    pathname.startsWith("/api/applications") ||
    pathname === "/api/admin/check" ||
    pathname === "/api/admin/logout";

  if (isProtectedApi) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "인증이 필요합니다." },
        { status: 401 },
      );
    }

    try {
      const decoded = JSON.parse(Buffer.from(token, "base64").toString());
      if (!decoded.authenticated) {
        throw new Error("Invalid token");
      }
    } catch {
      return NextResponse.json(
        { error: "유효하지 않은 인증입니다." },
        { status: 401 },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/applications/:path*", "/api/admin/check", "/api/admin/logout"],
};
