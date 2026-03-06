import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";

export async function middleware(request: NextRequest) {
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
    const response = NextResponse.next();
    const session = await getIronSession<SessionData>(request, response, sessionOptions);

    if (!session.authenticated) {
      return NextResponse.json(
        { error: "인증이 필요합니다." },
        { status: 401 },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/applications/:path*", "/api/admin/check", "/api/admin/logout"],
};
