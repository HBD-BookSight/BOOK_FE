import React from "react";
import CommonPillButton from "../common/CommonPillButton";
import TriangleArrow from "@/public/icons/triangleArrowIcon.svg";

const PublisherFilterController = () => {
  return (
    <header className="sticky top-0 flex w-full">
      <div className="scrollbar-hide flex flex-row items-center justify-start gap-2 overflow-x-auto pl-5 text-xl">
        <CommonPillButton className="!size-fit shrink-0 border-none bg-gradient-to-r from-[#B0B5DF] to-[#EEDBE0] px-4 font-semibold text-white">
          뉴스레터
        </CommonPillButton>
        <CommonPillButton className="!size-fit shrink-0 border-gray-200 px-4 text-[var(--sub-color)]">
          플레이리스트
        </CommonPillButton>
        <div className="h-3/5 w-0 border-r"></div>
        <CommonPillButton className="!size-fit shrink-0 border-gray-200 px-4 text-[var(--sub-color)]">
          출판사명 A-Z
          <TriangleArrow className={`flex size-4 rotate-180 items-center justify-center transition duration-300`} />
        </CommonPillButton>
      </div>
    </header>
  );
};

export default PublisherFilterController;
