import PublisherFilterController from "@/components/publisherFilterController/PublisherFilterController";
import PublisherPageDataProvider from "@/context/PublisherPageDataProvider";
import React from "react";

const PublisherPage = () => {
  return (
    <main className="relative flex size-full flex-col items-center">
      <PublisherPageDataProvider initialData={{}}>
        <PublisherFilterController />
      </PublisherPageDataProvider>
    </main>
  );
};

export default PublisherPage;
