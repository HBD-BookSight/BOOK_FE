import React from "react";
import ScheduleHeaderHelper from "./ScheduleHeaderHelper";
import SchedulePageDataProvider from "./SchedulePageDataProvider";
import ScheduleFilterController from "@/components/scheduleFilterController/ScheduleFilterController";
import ScheduleItem from "@/components/mainScheduleSlide/ScheduleItem";

const SchedulePage = () => {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SchedulePageDataProvider initialData={{}}>
        <ScheduleHeaderHelper />
        <ScheduleFilterController />
        <div className="relative flex flex-1 flex-col overflow-auto">
          <div className="absolute flex w-full flex-1 flex-col gap-3 p-[--client-layout-margin]">
            <ScheduleDataContainer />
          </div>
        </div>
      </SchedulePageDataProvider>
    </main>
  );
};

export default SchedulePage;

const ScheduleDataContainer = () => {
  return [...new Array(12)].map((_item, index) => <ScheduleItem key={index} className="h-fit w-full"></ScheduleItem>);
};
