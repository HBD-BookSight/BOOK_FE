import React from "react";
import DiscoveryHeaderHelper from "./DiscoveryHeaderHelper";
import DiscoveryPageDataProvider from "./DiscoveryPageDataProvider";
import DiscoveryFilterController from "@/components/discoveryFilterController/DiscoveryFilterController";
import DiscoveryItem from "@/components/discovery/DiscoveryItem";

const discoveryPage = () => {
  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      <DiscoveryHeaderHelper />
      <DiscoveryPageDataProvider initialData={{}}>
        <DiscoveryFilterController />
        <ul className="w-full px-[var(--client-layout-margin)]">
          <DiscoveryDataContainer />
        </ul>
      </DiscoveryPageDataProvider>
    </main>
  );
};

export default discoveryPage;

const DiscoveryDataContainer = () => {
  return [...new Array(12)].map((_item, index) => (
    <DiscoveryItem key={index} className="h-fit w-full" contentType="타입" title="제목" imageUrl=""></DiscoveryItem>
  ));
};
