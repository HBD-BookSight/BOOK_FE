"use client";
import { useAdminPageData } from "@/app/admin/AdminPageDataProvider";
import React, { HTMLAttributes } from "react";
import MemoizedAdminRowListItem from "./AdminRowListItem";

type Props = {
  keys: string[];
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
const AdminRowList = <T,>({ className, keys, ...props }: Readonly<Props>) => {
  const { data, setSelectRow, selectRow } = useAdminPageData<T>();

  return (
    <div className={`relative flex flex-1 flex-col overflow-auto ${className || ""}`} {...props}>
      <div className="absolute flex size-full flex-col gap-2">
        <div className="sticky top-0 flex w-fit flex-row gap-2 border-b-[1px] bg-white pl-8">
          <p className="w-12 overflow-hidden text-ellipsis font-bold"></p>
          {keys.map((key, index) => {
            return (
              <p key={index} className="w-24 overflow-hidden text-ellipsis font-bold">
                {key}
              </p>
            );
          })}
        </div>
        {data instanceof Array &&
          data.map((item, rowIndex) => {
            if (typeof item === "object") {
              return (
                <MemoizedAdminRowListItem<T>
                  key={rowIndex}
                  item={item}
                  keys={keys}
                  rowIndex={rowIndex}
                  isSelect={selectRow === rowIndex}
                  setSelectRow={setSelectRow}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default AdminRowList;
