import { Suspense } from "react";
import BirthDayHeaderHelper from "./components/BirthDayHeaderHelper";
import BirthDayBookGridContainer from "./components/BirthDayBookGridContainer";
import LoadingSpinner from "@/components/common/LoadingSpinner";
const BirthDayDetail = () => {
  return (
    <main className="relative flex size-full flex-col items-center">
      <Suspense fallback={<LoadingSpinner className="h-[50vh] w-full" />}>
        <BirthDayHeaderHelper />
        <BirthDayBookGridContainer />
      </Suspense>
    </main>
  );
};

export default BirthDayDetail;
