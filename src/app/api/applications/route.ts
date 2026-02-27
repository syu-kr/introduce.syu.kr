import { saveApplication, getApplications } from "@/lib/storage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // 필수 필드 검증
    if (!data.name || !data.studentId || !data.department || !data.year || !data.email || !data.phone || !data.motivation) {
      return NextResponse.json(
        { error: "필수 필드가 누락되었습니다." },
        { status: 400 },
      );
    }

    const application = await saveApplication(data);
    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error("Failed to save application:", error);
    return NextResponse.json(
      { error: "지원서 저장에 실패했습니다." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const applications = await getApplications();
    return NextResponse.json(applications);
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    return NextResponse.json(
      { error: "지원자 목록을 불러올 수 없습니다." },
      { status: 500 },
    );
  }
}
