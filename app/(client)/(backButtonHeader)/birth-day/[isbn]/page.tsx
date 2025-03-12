import React, { Suspense } from "react";
import BookHeaderHelper from "../../book/[isbn]/BookHeaderHelper";
import BirthDayBookDetailContainer from "./BirthDayBookDetailContainer";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const BirthDayBookDetailpage = async ({ params }: { params: Promise<{ isbn?: number }> }) => {
  const { isbn } = await params;
  return (
    <>
      <BookHeaderHelper bookData={undefined} isbn={isbn!} />
      <main className="flex size-full flex-1 items-center gap-8">
        <Suspense fallback={<LoadingSpinner className="h-[80vw] w-full" />}>
          <BirthDayBookDetailContainer isbn={isbn!} />
        </Suspense>
      </main>
    </>
  );
};

export default BirthDayBookDetailpage;
