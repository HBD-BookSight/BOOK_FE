import React, { HTMLAttributes } from "react";
import BookDetailImageSection from "./BookDetailImageSection";
import BookTitleSection from "./BookTitleSection";
import BookDetailSection from "./BookDetailSection";
import RecommandedItem from "./RecommandedItem";
import { SuspenseResource } from "@/app/(client)/(backButtonHeader)/book/[isbn]/page";
import { redirect } from "next/navigation";

type Props = {
  className?: string;
  suspenseResource: SuspenseResource;
  isbn: number;
  hasData?: boolean;
} & HTMLAttributes<HTMLDivElement>;
const BookDetail = ({ className, suspenseResource, isbn, hasData = false, ...props }: Readonly<Props>) => {
  const bookData = suspenseResource.read().documents[0];
  if (!bookData && !hasData) {
    redirect("/birth-day/" + isbn);
  }

  return (
    <div className={`relative flex size-full flex-col px-[var(--client-layout-margin)] ${className || ""}`} {...props}>
      <BookDetailImageSection imageUrl={bookData?.thumbnail} birthDay={new Date(bookData?.datetime)} className="my-6" />
      <BookTitleSection
        bookName={bookData?.title || "책 이름(정보 미제공)"}
        birthDayDate={new Date(bookData?.datetime)}
        url={bookData?.url}
        className="mb-10"
      />
      <BookDetailSection
        author={bookData?.authors.join(", ") || "저자 이름(정보 미제공)"}
        pulisher={bookData?.publisher || "출판사(정보 미제공)"}
        description={bookData?.contents || "책 소개(정보 미제공)"}
        viewMoreUrl={bookData?.url}
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
