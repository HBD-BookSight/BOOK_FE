import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Suspense } from "react";
import AuthorGridContainer from "./AuthorGridContainer";

const PublisherPage = () => {
  return (
    <main className="relative flex size-full flex-col items-center">
      <Suspense fallback={<LoadingSpinner className="h-[50vh] w-full" />}>
        <AuthorGridContainer />
      </Suspense>
    </main>
  );
};

export default PublisherPage;
