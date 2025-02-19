import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
  className?: string;
  isbn: string;
  imageUrl: string;
} & HTMLAttributes<HTMLAnchorElement>;
const BookItem = ({ className, isbn, imageUrl, ...props }: Readonly<Props>) => {
  return (
    <Link
      href={`/book/${isbn}`}
      className={`relative flex aspect-[3/4] size-full items-end justify-end ${className || ""}`}
      {...props}
    >
      <Image alt="book" src={imageUrl} className={` rounded-2xl shadow-[5px_0_8px_3px_rgba(0,0,0,0.08)]`} fill />
    </Link>
  );
};

export default BookItem;
