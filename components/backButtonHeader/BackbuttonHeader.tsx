"use client";
import { useBackHeader } from "@/context/backHeaderStore";
import { HTMLAttributes } from "react";
import BackArrow from "../icons/backArrowIcon.svg";
import { useRouter } from "next/navigation";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const BackbuttonHeader = ({ className, ...etc }: Readonly<Props>) => {
  const { title, subtitle, etcButton } = useBackHeader();
  const router = useRouter();
  return (
    <div
      className={`sticky top-0 z-40 flex w-full flex-row justify-between bg-[#FFFFFFD9] p-[var(--root-layout-margin)] backdrop-blur-[5px] ${
        className || ""
      }`}
      {...etc}
    >
      <button
        className="text-[var(--sub-color)]"
        onClick={() => {
          router.back();
        }}
      >
        <BackArrow className="w-12" />
      </button>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-lg font-semibold">{title}</div>
        {subtitle && <div className="text-sm font-normal text-[var(--sub-color)]">{subtitle}</div>}
      </div>
      <button className="w-12">{etcButton && etcButton}</button>
    </div>
  );
};

export default BackbuttonHeader;
