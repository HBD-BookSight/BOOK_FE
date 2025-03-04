"use client";

import { HTMLAttributes } from "react";
import CommonPillButton from "../common/CommonPillButton";

type Props = { className?: string; resultLength?: number; onClick?: () => void } & HTMLAttributes<HTMLDivElement>;
const AdminControlBar = ({ className, resultLength, onClick, ...props }: Props) => {
  return (
    <div
      className={`relative flex h-16 w-full flex-row items-center justify-between !text-sm font-semibold ${
        className || ""
      }`}
      {...props}
    >
      <span className="flex flex-row items-center justify-center gap-7">
        <p className="text-sm font-semibold text-[var(--highlight-color)]">All {resultLength || "0"}</p>
        <CommonPillButton onClick={onClick} className="h-8 w-20 bg-[var(--highlight-color)] text-white">
          Add row
        </CommonPillButton>
      </span>
      <span className="flex flex-row gap-2">
        <CommonPillButton onClick={onClick} className="h-8 w-20 border-red-600 text-red-600">
          Delete
        </CommonPillButton>
        <CommonPillButton onClick={onClick} className="h-8 w-20 border-gray-200 text-[var(--sub-color)]">
          Edit
        </CommonPillButton>
      </span>
    </div>
  );
};

export default AdminControlBar;
