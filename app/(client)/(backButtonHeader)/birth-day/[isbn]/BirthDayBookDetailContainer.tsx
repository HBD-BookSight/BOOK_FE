"use client";

import BookDetail from "@/components/bookDetail/BookDetail";
import { Book, CSVBook } from "@/types/api";
import { useEffect, useState } from "react";

const BirthDayBookDetailContainer = ({ isbn }: { isbn: number }) => {
  const [bookState, setBookState] = useState<Book>();
  useEffect(() => {
    //카카오 검색데이터 없을시 세션 스토리지에서 제목을 가져옴
    const sessionStorageData = sessionStorage.getItem(isbn.toString());
    if (sessionStorageData && !bookState) {
      const bookData: CSVBook = JSON.parse(sessionStorageData);
      setBookState({
        title: bookData.TITLE_NM,
        authors: bookData.AUTHR_NM.split(", "),
        publisher: bookData.PUBLISHER_NM,
        datetime: bookData.TWO_PBLICTE_DE,
        thumbnail: bookData.IMAGE_URL,
        isbn: bookData.ISBN_THIRTEEN_NO,
        price: 0,
        sale_price: 0,
        status: "",
        translators: [],
        url: "",
        contents: bookData.BOOK_INTRCN_CN,
      });
    }
    console.log(bookState);
  }, [isbn, bookState]);
  return (
    <BookDetail
      isbn={isbn}
      hasData={true}
      suspenseResource={{
        read: () => ({ documents: [bookState!], meta: { is_end: false, pageable_count: 1, total_count: 1 } }),
      }}
    ></BookDetail>
  );
};

export default BirthDayBookDetailContainer;
