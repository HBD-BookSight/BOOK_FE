"use client";
import { HTMLAttributes, useRef } from "react";
import ScheduleItem, { ScheduleItemProps } from "./ScheduleItem";
import ArrowHeadIcon from "@/public/icons/arrowHeadIcon.svg";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const MainScheduleSlideContainer = ({ className, ...props }: Readonly<Props>) => {
  const SliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`group relative size-full ${className || ""}`} {...props}>
      <ArrowHeadIcon
        className="absolute left-0 top-1/2 z-10 size-5 -translate-y-1/2 cursor-pointer text-[var(--sub-color)] opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() =>
          SliderRef.current?.scrollBy({
            left: -SliderRef.current.offsetWidth / DefaultItems.length,
            behavior: "smooth",
          })
        }
      />
      <div
        className="scrollbar-hide relative flex size-full snap-x snap-mandatory flex-row gap-2 overflow-x-scroll pr-[var(--client-layout-margin)]"
        ref={SliderRef}
      >
        {DefaultItems.map((item, index) => (
          <ScheduleItem
            key={index}
            className="snap-center"
            typeName={item.typeName}
            title={item.title}
            publisher={item.publisher}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
      <ArrowHeadIcon
        className="absolute right-0 top-1/2 z-10 mr-[var(--client-layout-margin)] size-5 -translate-y-1/2 rotate-180 cursor-pointer text-[var(--sub-color)] opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() =>
          SliderRef.current?.scrollBy({
            left: SliderRef.current.offsetWidth / DefaultItems.length,
            behavior: "smooth",
          })
        }
      />
    </div>
  );
};

export default MainScheduleSlideContainer;

const DefaultItems: ScheduleItemProps[] = [
  {
    typeName: "타입",
    title: "제목",
    publisher: "출판사",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    typeName: "타입",
    title: "제목",
    publisher: "출판사",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    typeName: "타입",
    title: "제목",
    publisher: "출판사",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    typeName: "타입",
    title: "제목",
    publisher: "출판사",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    typeName: "타입",
    title: "제목",
    publisher: "출판사",
    startDate: new Date(),
    endDate: new Date(),
  },
];
