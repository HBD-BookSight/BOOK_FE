import React, { Suspense } from "react";
import BookHeaderHelper from "./BookHeaderHelper";
import BookDetail from "@/components/bookDetail/BookDetail";
import { handleFetchKaKaoData } from "@/function/common";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { KaKaoBookResponse } from "@/types/api";
import { unstable_cache } from "next/cache";

export const revalidate = 86400; // 캐시를 너무 오래 저장하면 더 중요한 캐시 정보(getBirthdayBook 함수처럼 무거운거)가 제거될 수 있으므로 생일도서가 변경되는 24시간만 유효하도록 설정함

const BookDetailpage = async ({ params }: { params: Promise<{ isbn?: number }> }) => {
  const { isbn } = await params;
  const suspenseResource = fetchKaKaoBookSuspense(isbn);

  return (
    <>
      <BookHeaderHelperContainer suspenseResource={suspenseResource} isbn={isbn} />
      <main className="flex size-full flex-1 items-center gap-8">
        <Suspense fallback={<LoadingSpinner className="h-[80vw] w-full" />}>
          <BookDetail<KakaoSuspenseResource> suspenseResource={suspenseResource} />
        </Suspense>
      </main>
    </>
  );
};

export default BookDetailpage;

export type KakaoSuspenseResource = {
  read: () => KaKaoBookResponse;
};
/**
 * handleFetchKaKaoData 통신이 끝날때까지 렌더링을 중지하면
 * 멈춘것처럼 이전화면에서 대기 해야하므로 통신을 Promise로 저장해서 전달
 */
const fetchKaKaoBookSuspense = (isbn?: number): KakaoSuspenseResource => {
  let data: KaKaoBookResponse | undefined;
  let promise: Promise<KaKaoBookResponse | undefined>;
  const cachedFetchKaKaoData = unstable_cache(
    async (isbn?: string) => handleFetchKaKaoData(isbn, "isbn"),
    [String(isbn)],
    { revalidate: 86400 }
  );
  return {
    read: () => {
      if (data) return data;
      if (!promise) promise = cachedFetchKaKaoData(isbn?.toString()).then((result) => (data = result));
      throw promise;
    },
  };
};

//클라이언트 컴포넌트인 BookHeaderHelper에게 suspenseResource를 전달하기위한 컨테이너
const BookHeaderHelperContainer = ({
  suspenseResource,
  isbn,
}: {
  suspenseResource: KakaoSuspenseResource;
  isbn?: number;
}) => {
  const resource = suspenseResource.read().documents[0];
  return <BookHeaderHelper bookData={resource} isbn={isbn!} />;
};
