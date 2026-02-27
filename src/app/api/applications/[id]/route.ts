import { deleteApplication } from "@/lib/storage";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const success = await deleteApplication(id);

    if (!success) {
      return NextResponse.json(
        { error: "지원자를 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete application:", error);
    return NextResponse.json(
      { error: "삭제에 실패했습니다." },
      { status: 500 },
    );
  }
}
