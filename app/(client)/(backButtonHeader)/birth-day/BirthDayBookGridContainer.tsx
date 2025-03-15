"use client";
import BookGrid from "@/components/bookGrid/BookGrid";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { CSVBook } from "@/types/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

const BirthDayBookGridContainer = () => {
  const nextPageButtonRef = useRef<HTMLButtonElement>(null);
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["birthDayBook", new Date().getUTCDate()], //UTC날짜를 기준으로 쿼리키 유효
    queryFn: fetchInfiniteCsvData,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 24 * 60 * 60 * 1000,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    if (nextPageButtonRef.current) {
      observer.observe(nextPageButtonRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      {!isLoading ? (
        <>
          {data?.pages.map((page, index) => (
            <BookGrid key={index} books={page.data || []} className={`${data?.pages.length > 0 && "py-0 pt-[10px]"}`} />
          ))}
          {hasNextPage && (
            <button onClick={() => fetchNextPage()} ref={nextPageButtonRef}>
              더보기
            </button>
          )}
        </>
      ) : (
        <LoadingSpinner className="h-[50vh] w-full" />
      )}
    </>
  );
};

export default BirthDayBookGridContainer;

const fetchInfiniteCsvData = async ({ pageParam }: { pageParam: number }) => {
  const allIsbns: string[] = JSON.parse(sessionStorage.getItem("ISBN") || "[]");
  const isbns = allIsbns.slice(pageParam, pageParam + 6);
  const response = await fetch("/api/book?" + isbns.map((isbn) => `isbn=${isbn}`).join("&"));
  const data = await response.json();
  const keys = Object.keys(data.data);
  const parseData: CSVBook[] = keys.map((key) => data.data[key]);

  const hasNextPage = pageParam + 6 < allIsbns.length;
  return {
    data: parseData,
    nextCursor: hasNextPage ? pageParam + 6 : undefined,
  };
};
