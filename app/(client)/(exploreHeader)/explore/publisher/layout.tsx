import PublisherFilterController from "@/components/publisherFilterController/PublisherFilterController";
import { ReactNode } from "react";
const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <PublisherFilterController />
      {children}
    </>
  );
};

export default layout;
