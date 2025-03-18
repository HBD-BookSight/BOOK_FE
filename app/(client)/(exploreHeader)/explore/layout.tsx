import ExploreHeader from "@/components/exploreHeader/ExploreHeader";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <ExploreHeader />
      {children}
    </>
  );
};

export default layout;
