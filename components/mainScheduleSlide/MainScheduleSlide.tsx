import { HTMLAttributes } from "react";
import MainScheduleSlideContainer from "./MainScheduleSlideContainer";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const MainScheduleSlide = ({ className, ...props }: Readonly<Props>) => {
  return (
    <section
      className={`relative flex size-full flex-col pl-[var(--client-layout-margin)] ${className || ""}`}
      {...props}
    >
      <h2 className="mb-1 text-lg font-bold">다가오는 일정</h2>
      <p className="mb-4 text-sm text-[var(--sub-color)]">책을 좋아하는 당신을 위한 이벤트</p>
      <MainScheduleSlideContainer />
    </section>
  );
};

export default MainScheduleSlide;
