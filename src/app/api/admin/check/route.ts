import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";

export async function GET(request: NextRequest) {
  const response = NextResponse.json({ authenticated: true });
  const session = await getIronSession<SessionData>(request, response, sessionOptions);

  if (!session.authenticated) {
    return NextResponse.json(
      { error: "인증이 필요합니다." },
      { status: 401 },
    );
  }

  return response;
}
