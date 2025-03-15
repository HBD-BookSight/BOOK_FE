import { revalidateTag } from "next/cache";
import getConfig from "next/config";
import { NextResponse } from "next/server";

// 새 정보를 얻도록 캐시태그를 무효화시키는 cron job용 api
export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    console.log("인증되지 않은 요청");
    return NextResponse.json({ message: "인증되지 않은 요청" }, { status: 401 });
  }
  try {
    // 태그 무효화
    revalidateTag("birth-day-book-data");
    console.log("태그 무효화 성공");
    await new Promise((resolve) => setTimeout(resolve, 8000)); // 서버가 인식하는데 시간이 필요할지 모르므로
    const { publicRuntimeConfig } = getConfig();
    const baseUrl = publicRuntimeConfig.VERCEL_PROJECT_PRODUCTION_URL;
    const warmupResponse = await fetch(`${baseUrl}/api/refresh/warmup`, {
      headers: {
        Authorization: `Bearer ${process.env.CRON_SECRET}`,
        cache: "no-store",
      },
    });
    if (!warmupResponse.ok) {
      throw new Error("워밍업 요청 실패");
    }
    console.log("태그 무효화 성공, 워밍업 요청 성공(완료 성공 아님)");
    return NextResponse.json({ message: "워밍업 완료, 태그 무효화 성공" });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "오류 발생";
    console.log("오류 발생", errMessage);
    return NextResponse.json({ message: "오류 발생", error: errMessage }, { status: 500 });
  }
}
