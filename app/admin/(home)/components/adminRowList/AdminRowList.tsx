"use client";
import { useAdminPageData } from "@/app/admin/(home)/components/AdminPageDataProvider";
import { HTMLAttributes } from "react";
import MemoizedAdminRowListItem from "./AdminRowListItem";

type Props = {
  keys: string[];
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
const AdminRowList = <T,>({ className, keys, ...props }: Readonly<Props>) => {
  const { data, setSelectRow, selectRow } = useAdminPageData<T>();
  console.log(data, "가져온 데이터");

  return (
    <div
      className={`relative flex flex-1 flex-col overflow-auto ${
        className || ""
      }`}
      {...props}
    >
      <div className="absolute flex size-full flex-col">
        <div className="sticky top-0 z-10 flex w-fit flex-row gap-2 border-b-[1px] bg-white pl-[88px]">
          {keys.map((key, index) => {
            return (
              <p
                key={index}
                className="w-[115px] overflow-hidden text-xs font-bold"
              >
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
