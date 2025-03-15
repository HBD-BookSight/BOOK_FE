import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// 특정 태그를 재검증 시키는 크론잡용 API
export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: "인증되지 않은 요청" }, { status: 401 });
  }
  try {
    // 태그 재검증
    revalidateTag("birth-day-book-data");
    // 페이지 워밍업 요청
    const baseUrl = process.env.AUTH0_BASE_URL || `https://${process.env.VERCEL_URL}`;
    await fetch(baseUrl);

    return NextResponse.json({ message: "재검증 및 워밍업 완료" });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "오류 발생";
    return NextResponse.json({ message: "오류 발생", error: errMessage }, { status: 500 });
  }
}
