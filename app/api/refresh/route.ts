import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// 루트페이지 서버컴포넌트를 재 렌더링 시키는 API
export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }
  revalidatePath("/");
  return NextResponse.json({ message: "Revalidated." });
}
