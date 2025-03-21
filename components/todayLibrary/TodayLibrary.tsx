import React, { HTMLAttributes } from "react";
import CommonPillButton from "../common/CommonPillButton";
import TodayLibraryItem from "./TodayLibraryItem";

type Props = {
  className?: string;
} & HTMLAttributes<HTMLElement>;
const TodayLibrary = ({ className, ...props }: Props) => {
  return (
    <section
      className={`relative h-fit w-full bg-gradient-to-r from-[#B0B5DF40] to-[#EEDBE040] p-[var(--client-layout-margin)] ${
        className || ""
      }`}
      {...props}
    >
      <div className="relative flex size-full flex-row items-center justify-between">
        <div>
          <h2 className="section-title mb-1">오늘의 서재</h2>
          <p className="section-sub-title mb-4">관심있는 책이나 출판사를 찾아보세요</p>
        </div>
        <CommonPillButton className="!size-fit border-none bg-white px-4 text-black shadow-[0_0_var(--client-layout-margin)_rgba(0,0,0,0.12)]">
          shuffle
        </CommonPillButton>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[...new Array(3)].map((_item, index) => (
          <TodayLibraryItem
            key={index}
            publisher="asdfasdfasdfasfdasdfad"
            imageUrl="https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mKZusDpIQVt5YfGy3HGKR1zqyXPN49fZJFeUbBIr-~oac~P039ILBN7ejOniwgBTDpCrLmiBZt5ZozJHMzgRBUGE5eqyvwroMaESIq7ckSY1MDxm5XPEsQY4bE83TnopKHFua~Ve3xh98P2hdC-dLMxM7stGzB-Orng6D7BfJB6Y4eGM9Zx~ZTlfJKCdDyfbiyoDWB2MC8XcJNKbdMJAqgWzS3uEwUovbc~33m~jDtpLvcg5a1jTVLr9K0tfeb6gZjWHxsdOqytdsbyqmddt1SvNwerpyxwFlth9RP56kGBSqNvB7q0oaiWB0EGeH1-jnt~bSGVT8IvJRWNOJPRrgQ__"
          />
        ))}
      </div>
    </section>
  );
};

export default TodayLibrary;
