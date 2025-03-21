import { HTMLAttributes } from "react";
import MainScheduleSlideContainer from "./MainScheduleSlideContainer";
import BackArrowIcon from "@/public/icons/backArrowIcon.svg";
import Link from "next/link";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const MainScheduleSlide = ({ className, ...props }: Readonly<Props>) => {
  return (
    <section
      className={`relative flex size-full flex-col pl-[var(--client-layout-margin)] ${className || ""}`}
      {...props}
    >
      <div className="relative flex size-full flex-row items-center justify-between pr-[var(--client-layout-margin)]">
        <div>
          <h2 className="section-title mb-1">다가오는 일정</h2>
          <p className="section-sub-title mb-4">책을 좋아하는 당신을 위한 이벤트</p>
        </div>
        <Link
          className="flex size-fit items-center justify-center border-none bg-white px-4 text-[var(--sub-color)]"
          href="/schedule"
          scroll={false}
        >
          <p>view all</p> <BackArrowIcon className="size-5 rotate-180" />
        </Link>
      </div>
      <MainScheduleSlideContainer />
    </section>
  );
};

export default MainScheduleSlide;
