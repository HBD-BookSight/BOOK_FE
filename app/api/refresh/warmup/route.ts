import getBirthdayBook from "@/function/server/getBirtdayBook";
import { NextResponse } from "next/server";

// revalidate API가 호출하여 getBirthdayBook를 미리 실행시켜 캐싱하는 API
export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    console.log("인증되지 않은 요청");
    return NextResponse.json({ message: "인증되지 않은 요청" }, { status: 401 });
  }
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 서버가 인식하는데 시간이 필요할지 모르므로
    await getBirthdayBook();
    return NextResponse.json({ message: "재검증 및 워밍업 완료" });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "오류 발생";
    console.log("오류 발생", errMessage);
    return NextResponse.json({ message: "오류 발생", error: errMessage }, { status: 500 });
  }
}
