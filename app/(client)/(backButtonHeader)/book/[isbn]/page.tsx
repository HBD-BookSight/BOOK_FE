import React, { Suspense } from "react";
import BookHeaderHelper from "./BookHeaderHelper";
import BookDetail from "@/components/bookDetail/BookDetail";
import { handleFetchKaKaoData } from "@/function/common";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { KaKaoBookResponse } from "@/types/api";

export type SuspenseResource = {
  read: () => KaKaoBookResponse;
};

const BookDetailpage = async ({ params }: { params: Promise<{ isbn?: number }> }) => {
  const { isbn } = await params;
  const suspenseResource: SuspenseResource = fetchKaKaoBookSuspenseData(isbn);

  return (
    <>
      <BookHeaderHelperContainer suspenseResource={suspenseResource} isbn={isbn} />
      <main className="flex size-full flex-1 items-center gap-8">
        <Suspense fallback={<LoadingSpinner className="h-[80vw] w-full" />}>
          <BookDetail suspenseResource={suspenseResource} isbn={isbn!} />
        </Suspense>
      </main>
    </>
  );
};

export default BookDetailpage;

/**
 * handleFetchKaKaoData 통신이 끝날때까지 렌더링을 중지하면
 * 멈춘것처럼 이전화면에서 대기 해야하므로 통신을 Promise로 저장해서 전달
 */
const fetchKaKaoBookSuspenseData = (isbn?: number) => {
  let data: KaKaoBookResponse | undefined;
  let promise: Promise<KaKaoBookResponse | undefined>;
  return {
    read: () => {
      if (data) return data;
      if (!promise) promise = handleFetchKaKaoData(isbn?.toString(), "isbn").then((result) => (data = result));
      throw promise;
    },
  };
};

//클라이언트 컴포넌트인 BookHeaderHelper에게 suspenseResource를 전달하기위한 컨테이너
const BookHeaderHelperContainer = ({
  suspenseResource,
  isbn,
}: {
  suspenseResource: SuspenseResource;
  isbn?: number;
}) => {
  const resource = suspenseResource.read().documents[0];
  return <BookHeaderHelper bookData={resource} isbn={isbn!} />;
};
