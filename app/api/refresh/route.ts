import getBirthdayBook from "@/function/server/getBirtdayBook";
import getConfig from "next/config";
import { NextResponse } from "next/server";

// 특정 태그를 재검증 시키는 크론잡용 API
export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    console.log("인증되지 않은 요청");
    return NextResponse.json({ message: "인증되지 않은 요청" }, { status: 401 });
  }
  try {
    // 페이지 워밍업 요청
    const { publicRuntimeConfig } = getConfig();
    const baseUrl = publicRuntimeConfig.VERCEL_PROJECT_PRODUCTION_URL;
    if (!baseUrl) throw new Error("VERCEL_PROJECT_PRODUCTION_URL이 버셀에서 주입되지 않았습니다");
    await fetch(baseUrl, { cache: "no-cache" });
    await getBirthdayBook();

    console.log("재검증 및 워밍업 완료");
    return NextResponse.json({ message: "재검증 및 워밍업 완료" });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "오류 발생";
    console.log("오류 발생", errMessage);
    return NextResponse.json({ message: "오류 발생", error: errMessage }, { status: 500 });
  }
}
