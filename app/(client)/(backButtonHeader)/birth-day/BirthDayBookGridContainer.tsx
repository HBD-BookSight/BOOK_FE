"use client";
import BirthDayBookGrid from "@/components/bookGrid/BirthDayBookGrid";
import { CSVBook } from "@/types/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const BirthDayBookGridContainer = () => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["birthDayBook", new Date().getUTCDate()], //UTC날짜를 기준으로 쿼리키 유효
    queryFn: fetchInfiniteCsvData,

    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return (
    <>
      {data?.pages.map((page, index) => (
        <BirthDayBookGrid
          key={index}
          books={page.data || []}
          className={`${data?.pages.length > 0 && "py-0 pt-[10px]"}`}
        />
      ))}
      <button onClick={() => fetchNextPage()}>더보기</button>
    </>
  );
};

export default BirthDayBookGridContainer;

const fetchInfiniteCsvData = async ({ pageParam }: { pageParam: number }) => {
  const isbns: string[] = sessionStorage.getItem("ISBN")
    ? JSON.parse(sessionStorage.getItem("ISBN") || "").slice(pageParam, pageParam + 6)
    : [];
  const response = await fetch("/api/book?" + isbns.map((isbn) => `isbn=${isbn}`).join("&"));
  const data = await response.json();
  const keys = Object.keys(data.data);
  const parseData: CSVBook[] = keys.map((key) => data.data[key]);
  return { data: parseData, nextCursor: pageParam + 6 };
};
