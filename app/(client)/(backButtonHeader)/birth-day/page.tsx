import BirthDayGrid from "@/components/birthDayGrid/BirthDayGrid";
import { Suspense } from "react";
import BirthDayHeaderHelper from "./BirthDayHeaderHelper";
const BirthDayDetail = () => {
  return (
    <main className="relative flex size-full flex-col items-center">
      <Suspense>
        <BirthDayHeaderHelper />
      </Suspense>
      <BirthDayGrid />
    </main>
  );
};

export default BirthDayDetail;
