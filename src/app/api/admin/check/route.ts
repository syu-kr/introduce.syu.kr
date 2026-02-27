import { NextResponse } from "next/server";

export async function GET() {
  // 이 API는 쿠키가 존재하는지만 확인 — 실제 검증은 middleware에서
  return NextResponse.json({ authenticated: true });
}
