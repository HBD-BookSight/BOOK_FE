import BirthDayGrid from "@/components/birthDayGrid/BirthDayGrid";
import { Suspense } from "react";
import BirthDayHeaderHelper from "./BirthDayHeaderHelper";
const BirthDayDetail = () => {
  return (
    <main className="flex size-full flex-1 items-center gap-8">
      <Suspense>
        <BirthDayHeaderHelper />
      </Suspense>
      <BirthDayGrid />
    </main>
  );
};

export default BirthDayDetail;
