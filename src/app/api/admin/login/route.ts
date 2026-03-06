import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD 환경변수가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "서버 설정 오류" },
        { status: 500 },
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "비밀번호가 틀렸습니다." },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ success: true });
    const session = await getIronSession<SessionData>(request, response, sessionOptions);
    session.authenticated = true;
    await session.save();

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "로그인에 실패했습니다." },
      { status: 500 },
    );
  }
}
