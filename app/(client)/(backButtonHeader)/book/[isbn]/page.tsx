import React from "react";
import BookHeaderHelper from "./BookHeaderHelper";
import BookDetail from "@/components/bookDetail/BookDetail";
import { handleFetchKaKaoData } from "@/function/common";
const BookDetailpage = async ({ params }: { params: Promise<{ isbn?: number }> }) => {
  const { isbn } = await params;
  const result = await handleFetchKaKaoData(isbn?.toString(), "isbn");

  return (
    <>
      <BookHeaderHelper
        bookName={result?.documents?.[0]?.title}
        hasData={(result?.documents && result?.documents.length > 0) || false}
        isbn={isbn!}
      />
      <main className="flex size-full flex-1 items-center gap-8">
        <BookDetail book={result} isbn={isbn!} />
      </main>
    </>
  );
};

export default BookDetailpage;
