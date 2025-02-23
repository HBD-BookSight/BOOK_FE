import React, { HTMLAttributes } from "react";
import BirthDayCakeIcon from "../icons/birthDayCakeIcon.svg";
import BookMarkIcon from "../icons/bookMarkIcon.svg";
import Link from "next/link";
import { formatDateToKorean } from "@/function/common";

type Props = {
  className?: string;
  bookName: string;
  birthDayDate: Date;
  isbn: string;
} & HTMLAttributes<HTMLDivElement>;
const BookTitleSection = ({ className, bookName, birthDayDate, isbn, ...props }: Readonly<Props>) => {
  return (
    <section className={`relative flex size-full flex-col items-start justify-start ${className || ""}`} {...props}>
      <h1 className="pb-2 text-lg font-semibold">{bookName}</h1>
      <p className="flex flex-row items-start pb-3 text-xs text-[var(--highlight-color)]">
        <BirthDayCakeIcon className="w-3" />
        {formatDateToKorean(birthDayDate)}
      </p>
      <div className="flex flex-row gap-2 text-sm text-[var(--sub-color)]">
        <Link
          className="relative flex items-center justify-center rounded-full border px-6 py-2"
          href={`/book/${isbn}`}
        >
          구매 정보
        </Link>
        <Link
          className="relative flex items-center justify-center gap-2 rounded-full border px-6 py-2"
          href={`/book/${isbn}`}
        >
          <BookMarkIcon className="w-3" />
          서재에 담기
        </Link>
      </div>
    </section>
  );
};

export default BookTitleSection;
