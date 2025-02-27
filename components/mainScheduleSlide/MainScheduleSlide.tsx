import { HTMLAttributes } from "react";
import ScheduleItem from "./ScheduleItem";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const MainScheduleSlide = ({ className, ...props }: Readonly<Props>) => {
  return (
    <section
      className={`relative flex size-full flex-col pl-[var(--client-layout-margin)] ${className || ""}`}
      {...props}
    >
      <h2 className="mb-1 text-lg font-bold">다가오는 일정</h2>
      <p className="mb-4 text-sm text-[var(--sub-color)]">책을 좋아하는 당신을 위한 이벤트</p>
      <div className="scrollbar-hide flex flex-row gap-2 overflow-x-scroll pr-[var(--client-layout-margin)]">
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
      </div>
    </section>
  );
};

export default MainScheduleSlide;
