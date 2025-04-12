"use client";
import React, { ReactNode, useState } from "react";
import SlideIndicator from "./SlideIndicator";

type Props = {
  className?: string;
  children?: ReactNode;
  pageCount: number;
};
const SlideContainer = ({ className, children, pageCount, ...props }: Readonly<Props>) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  return (
    <div className={`relative flex w-full flex-col ${className || ""}`} {...props}>
      {children}
      <SlideIndicator
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="mt-7"
      />
    </div>
  );
};

export default SlideContainer;
