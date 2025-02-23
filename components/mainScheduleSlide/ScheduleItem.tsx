import React, { HTMLAttributes } from "react";
import CalendarIcon from "../icons/calendarIcon.svg";
import { formatDateToKorean } from "@/function/common";

type Props = {
  className?: string;
  typeName?: string;
  title?: string;
  publisher?: string;
  startDate?: Date;
  endDate?: Date;
} & HTMLAttributes<HTMLDivElement>;
const ScheduleItem = ({ className, typeName, title, publisher, startDate, endDate, ...props }: Readonly<Props>) => {
  return (
    <aside className={`relative flex min-w-fit flex-col gap-1 rounded-2xl border p-6 ${className || ""}`} {...props}>
      <p className="text-sm font-bold text-[var(--highlight-color)]">{typeName ?? "타입"}</p>
      <h3 className="font-semibold">{title ?? "제목"}</h3>
      <p className="text-xs text-[var(--sub-color)]">{publisher ?? "출판사"}</p>
      <span className="flex size-full flex-row gap-1">
        <CalendarIcon className="w-3" />
        <p className="relative size-fit text-xs">
          {formatDateToKorean(startDate ?? new Date())}-{formatDateToKorean(endDate ?? new Date())}
        </p>
      </span>
    </aside>
  );
};

export default ScheduleItem;
