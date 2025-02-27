import React from "react";
import BookHeaderHelper from "./BookHeaderHelper";
import BookDetail from "@/components/bookDetail/BookDetail";
const BookDetailpage = () => {
  return (
    <>
      <BookHeaderHelper />
      <main className="flex size-full flex-1 items-center gap-8">
        <BookDetail />
      </main>
    </>
  );
};

export default BookDetailpage;
