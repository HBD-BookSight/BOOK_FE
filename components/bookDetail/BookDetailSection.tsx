import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
  className?: string;
  author: string;
  pulisher: string;
  description?: string;
  viewMoreUrl?: string;
} & HTMLAttributes<HTMLDivElement>;
const BookDetailSection = ({ className, author, pulisher, description, viewMoreUrl, ...props }: Readonly<Props>) => {
  return (
    <section
      className={`relative flex size-full flex-col items-start justify-start gap-2 text-sm ${className || ""}`}
      {...props}
    >
      <span className="flex flex-row gap-2">
        <p>작가</p>
        <p className="text-[var(--sub-color)]">{author}</p>
      </span>
      <span className="flex flex-row gap-2">
        <p>출판사</p>
        <p className="text-[var(--sub-color)]">{pulisher}</p>
      </span>
      {description && (
        <article className="relative size-full w-full text-[var(--sub-color)]">
          <p className="relative line-clamp-3 size-full break-words">{description}</p>
          {viewMoreUrl && (
            <Link href={viewMoreUrl} className="relative flex w-full justify-end underline">
              더보기
            </Link>
          )}
        </article>
      )}
    </section>
  );
};

export default BookDetailSection;
