"use client";
import { useParams } from "next/navigation";
import React, { HTMLAttributes } from "react";
import BookDetailImageSection from "./BookDetailImageSection";
import BookTitleSection from "./BookTitleSection";
import BookDetailSection from "./BookDetailSection";
import RecommandedItem from "./RecommandedItem";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const BookDetail = ({ className, ...props }: Readonly<Props>) => {
  const { isbn } = useParams();
  const StringIsbn = String(isbn);
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__";
  return (
    <div className={`relative flex size-full flex-col px-[var(--client-layout-margin)] ${className || ""}`} {...props}>
      <BookDetailImageSection imageUrl={imageUrl} className="my-6" />
      <BookTitleSection bookName="책이름" birthDayDate={new Date()} isbn={StringIsbn} className="mb-10" />
      <BookDetailSection
        author="작가 이름"
        pulisher="출판사 이름"
        description="asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdsdfasdfasdfasdfasdfasdfasdfaasdsdfasdfasdfasdfasdfasdfasdfassdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfafasdf"
        viewMoreUrl="/a/"
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
