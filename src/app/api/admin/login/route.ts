import { NextRequest, NextResponse } from "next/server";

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

    // 세션 토큰 생성
    const token = Buffer.from(
      JSON.stringify({ authenticated: true, timestamp: Date.now() }),
    ).toString("base64");

    const response = NextResponse.json({ success: true });

    // HttpOnly 쿠키로 토큰 설정
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 24시간
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "로그인에 실패했습니다." },
      { status: 500 },
    );
  }
}
