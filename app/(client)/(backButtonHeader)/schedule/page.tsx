import React from "react";
import ScheduleHeaderHelper from "./ScheduleHeaderHelper";
import SchedulePageDataProvider from "./SchedulePageDataProvider";
import ScheduleItem from "@/components/mainScheduleSlide/ScheduleItem";
import ScheduleFilterController from "@/components/scheduleFilterController/ScheduleFilterController";

const SchedulePage = () => {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SchedulePageDataProvider initialData={{}}>
        <ScheduleFilterController />
        <ScheduleHeaderHelper />
        <div className="mt-8 flex flex-col gap-3 p-[--client-layout-margin]">
          <ScheduleDataContainer />
        </div>
      </SchedulePageDataProvider>
    </main>
  );
};

export default SchedulePage;

const ScheduleDataContainer = () => {
  return [...new Array(12)].map((_item, index) => <ScheduleItem key={index} className="h-fit w-full"></ScheduleItem>);
};
