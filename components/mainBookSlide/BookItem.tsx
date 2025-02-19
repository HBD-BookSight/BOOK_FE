import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
  className?: string;
  isbn: string;
  imageUrl: string;
  ind: number;
  bookLength: number;
} & HTMLAttributes<HTMLAnchorElement>;
const BookItem = ({ className, isbn, imageUrl, ind, bookLength, ...props }: Readonly<Props>) => {
  return (
    <Link href={`/book/${isbn}`} className={`flex items-end justify-end ${className || ""}`} {...props}>
      <Image
        alt="book"
        src={imageUrl}
        width={ind !== bookLength - 1 ? 194 : 235}
        height={ind !== bookLength - 1 ? 293 : 341}
        className={`absolute rounded-2xl shadow-[5px_0_8px_3px_rgba(0,0,0,0.08)]`}
        style={{ zIndex: ind }}
        priority
      />
      {ind !== bookLength - 1 && (
        <div
          className="pointer-events-none absolute h-[281.91px] w-[194px] rounded-2xl bg-[#FFFFFF99]"
          style={{ zIndex: ind }}
        ></div>
      )}
    </Link>
  );
};

export default BookItem;
