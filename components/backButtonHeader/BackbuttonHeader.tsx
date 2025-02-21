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
    <header
      className={`sticky top-0 z-40 flex w-full flex-row justify-between bg-[#FFFFFFD9] p-[var(--root-layout-margin)] backdrop-blur-[5px] ${
        className || ""
      }`}
      {...etc}
    >
      <button
        onClick={() => {
          router.back();
        }}
      >
        <BackArrow className="w-12 text-[var(--sub-color)]" />
      </button>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        {subtitle && <h2 className="text-sm font-normal text-[var(--sub-color)]">{subtitle}</h2>}
      </div>
      <button className="w-12">{etcButton && etcButton}</button>
    </header>
  );
};

export default BackbuttonHeader;
