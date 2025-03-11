"use client";
import React, { HTMLAttributes, useEffect, useState } from "react";
import BookDetailImageSection from "./BookDetailImageSection";
import BookTitleSection from "./BookTitleSection";
import BookDetailSection from "./BookDetailSection";
import RecommandedItem from "./RecommandedItem";
import { CSVBook, KaKaoBookResponse } from "@/types/api";

type Props = { className?: string; book?: KaKaoBookResponse; isbn: number } & HTMLAttributes<HTMLDivElement>;
type BookDetailData = {
  title?: string;
  authors?: string;
  publisher?: string;
  datetime?: Date;
  imageUrl?: string;
  url?: string;
  contents?: string;
};
const BookDetail = ({ className, book, isbn, ...props }: Readonly<Props>) => {
  const [bookState, setBookState] = useState<BookDetailData>();
  useEffect(() => {
    if (!bookState && !!book?.documents.length) {
      setBookState({
        title: book.documents[0].title,
        authors: book.documents[0].authors.join(", "),
        publisher: book.documents[0].publisher,
        datetime: new Date(book?.documents[0].datetime),
        imageUrl: book.documents[0].thumbnail,
        url: book.documents[0].url,
        contents: book.documents[0].contents,
      });
    }
  }, [book, bookState]);

  useEffect(() => {
    //카카오 검색데이터 없을시 세션 스토리지에서 제목을 가져옴
    if (!bookState && !book?.documents.length) {
      const sessionStorageData = sessionStorage.getItem(isbn.toString());
      if (sessionStorageData) {
        const bookData: CSVBook = JSON.parse(sessionStorageData);
        setBookState({
          title: bookData.TITLE_NM,
          authors: bookData.AUTHR_NM,
          publisher: bookData.PUBLISHER_NM,
          datetime: new Date(bookData.TWO_PBLICTE_DE),
          imageUrl: bookData.IMAGE_URL,
          url: undefined,
          contents: bookData.BOOK_INTRCN_CN,
        });
      }
    }
  }, [book, bookState, isbn]);

  return (
    <div className={`relative flex size-full flex-col px-[var(--client-layout-margin)] ${className || ""}`} {...props}>
      <BookDetailImageSection imageUrl={bookState?.imageUrl} className="my-6" />
      <BookTitleSection
        bookName={bookState?.title || "책 이름(정보 미제공)"}
        birthDayDate={bookState?.datetime}
        url={bookState?.url}
        className="mb-10"
      />
      <BookDetailSection
        author={bookState?.authors || "저자 이름(정보 미제공)"}
        pulisher={bookState?.publisher || "출판사(정보 미제공)"}
        description={bookState?.contents || "책 소개(정보 미제공)"}
        viewMoreUrl={bookState?.url}
        className="mb-10"
      />
      <section>
        <h2 className="text-lg font-bold">추천 콘텐츠</h2>
        <RecommandedItem
          imageUrl="https://s3-alpha-sig.figma.com/img/8d4f/4b13/868fb4811d7171eef83e5a8d8988ba13?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ORxF1blpY9piMcDNWkmkCr~abQC~WhkmoV7bR8-1ZScEsgdDOEC~8K-fqVZWqkV9CCAm9yq5kkVK41L-FC8CaWHMeg6-jXLoMccBB0h3L1UDZNW94CxQGXq5eaniifhL65J3yI-yzkLhNthlH7kj2vrEZSg3GNDkOdnznkIaG6VqGoOfiPwqKIsJpo0oDNGmYpaFecaKCtQwvXD43jaZXmvwL1jIXwFuNrG7wTJkvnEYNf8CkWfCTxBExvqEiqwaj94XxeOpGA1wWWAmyPVGqG1Ngm2sifZWw3XkNGnZs0FDqd25Wo0eZHpTRAG7nFIzAq81iB2WBEz~prRFDvoNnw__"
          sourceName="유튜브"
          sourceUrl="ㅁㄴㅇㄹ"
          title="fasdfasdfasdfasdsdfasdfasdfasdfasdfasdfasdfaasdsdfasdfasdfasdfasdfasdfasdfassdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfafasd"
        />
      </section>
    </div>
  );
};

export default BookDetail;
