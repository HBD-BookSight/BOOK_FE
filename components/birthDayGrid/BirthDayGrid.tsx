"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import BookItem from "./Bookitem";
import { CSVBook } from "@/types/api";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const BirthDayGrid = ({ className, ...props }: Readonly<Props>) => {
  const [books, setBooks] = useState<CSVBook[]>();

  useEffect(() => {
    if (!books) {
      const books: CSVBook[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (!key) break;
        const value = sessionStorage.getItem(key);
        if (!value) break;
        books.push(JSON.parse(value));
      }
      setBooks(books);
    }
  }, [books]);

  return (
    <section
      className={`relative grid w-full grid-cols-2 gap-[10px] p-[var(--client-layout-margin)] ${className || ""}`}
      {...props}
    >
      {books?.map((item) => (
        <BookItem
          key={item.ISBN_THIRTEEN_NO}
          isbn={item.ISBN_THIRTEEN_NO}
          imageUrl={item.IMAGE_URL}
          bookName={item.TITLE_NM}
          publisher={item.PUBLISHER_NM}
          author={item.AUTHR_NM}
        />
      ))}
    </section>
  );
};

export default BirthDayGrid;
