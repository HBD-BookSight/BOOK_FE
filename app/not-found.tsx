"use client";

import { useIsMobile } from "@/components/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex size-full h-screen flex-col items-center justify-center gap-10 bg-[#ffffff]">
    <div className={`flex ${isMobile ? "flex-col items-center" : "items-end"}`}>
      <Image
        src={"/images/BOOKY_404.png"}
        alt={"404_img"}
        width={256}
        height={240}
      />
      <div className={`flex ${isMobile ? "flex-col items-center" : "flex-col gap-4"}`}>
        <p className="font-['Inter'] text-6xl font-black text-[#5F69BE]">
        Oops!
        </p>
        <span className="text-sm font-medium leading-5 text-[#808080] text-center">
        페이지를 찾을 수 없습니다. <br /> 잘못된 경로이거나 페이지가
        존재하지 않습니다.
        </span>
      </div>
    </div>
      <Link
        className="w-[328px] rounded-full bg-[#F8F8FE] py-7 text-center text-lg font-semibold text-[#5F69BE]"
        href={"/"}
      >
        홈 화면으로
      </Link>
    </div>
  );
}
