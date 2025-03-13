import React, { Suspense } from "react";
import BookHeaderHelper from "../../book/[isbn]/BookHeaderHelper";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { CSVBook } from "@/types/api";
import BookDetail from "@/components/bookDetail/BookDetail";

const BirthDayBookDetailpage = async ({ params }: { params: Promise<{ isbn?: number }> }) => {
  const { isbn } = await params;
  const suspenseResource = fetchCsvBookDataSuspense(isbn);
  return (
    <>
      <BookHeaderHelper bookData={undefined} isbn={isbn!} />
      <main className="flex size-full flex-1 items-center gap-8">
        <Suspense fallback={<LoadingSpinner className="h-[80vw] w-full" />}>
          <BookDetail<CsvSuspenseResource> suspenseResource={suspenseResource} />
        </Suspense>
      </main>
    </>
  );
};

export default BirthDayBookDetailpage;

export type CsvSuspenseResource = {
  read: () => CSVBook[];
};
const fetchCsvBookDataSuspense = (isbn?: number): CsvSuspenseResource => {
  let data: CSVBook[] | undefined;
  let promise: Promise<CSVBook[] | undefined>;
  console.log("fetchCsvBookDataSuspense요청은 하니?");
  return {
    read: () => {
      if (data) return data;
      if (!promise) promise = fetchCsvData(isbn).then((result) => (data = result));
      throw promise;
    },
  };
};

const fetchCsvData = async (isbn?: number) => {
  if (!isbn) throw new Error("ISBN is required");
  try {
    const baseUrl = process.env.AUTH0_BASE_URL || `https://${process.env.VERCEL_URL}`;
    const response = await fetch(`${baseUrl}/api/book?isbn=` + isbn, { cache: "force-cache" });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    console.log("fetchCsvData요청은 하니?");
    const keys = Object.keys(data.data);
    const parseData: CSVBook[] = keys.map((key) => data.data[key]);
    return parseData;
  } catch (error) {
    console.error("Error fetching CSV data:", error);
    throw error;
  }
};
