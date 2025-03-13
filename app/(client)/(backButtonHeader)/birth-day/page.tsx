import { Suspense } from "react";
import BirthDayHeaderHelper from "./BirthDayHeaderHelper";
import BirthDayBookGridContainer from "./BirthDayBookGridContainer";
const BirthDayDetail = () => {
  return (
    <main className="relative flex size-full flex-col items-center">
      <Suspense>
        <BirthDayHeaderHelper />
        <BirthDayBookGridContainer />
      </Suspense>
    </main>
  );
};

export default BirthDayDetail;
