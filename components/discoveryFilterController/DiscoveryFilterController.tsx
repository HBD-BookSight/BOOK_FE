"use client";
import {
  ContentsFilterType,
  useDiscoveryPageFilterControllerData,
} from "@/app/(client)/(backButtonHeader)/discovery/DiscoveryPageDataProvider";
import CommonPillButton from "../common/CommonPillButton";

const DiscoveryFilterController = () => {
  const { contentsfilter, setContentsFilter } = useDiscoveryPageFilterControllerData();

  return (
    <div className="sticky top-0 flex w-full">
      <div className="scrollbar-hide flex flex-row items-center justify-start gap-2 overflow-x-auto pl-5 text-xl">
        <CommonPillButton
          className={`!size-fit shrink-0 px-4 transition-colors ${
            contentsfilter === ContentsFilterType.All
              ? "border-none bg-gradient-to-r from-[#B0B5DF] to-[#EEDBE0] !font-semibold text-white"
              : "border-gray-200 px-4 text-[var(--sub-color)]"
          }`}
          onClick={() => setContentsFilter(ContentsFilterType.All)}
        >
          ALL
        </CommonPillButton>
        <CommonPillButton
          className={`!size-fit shrink-0 px-4 transition-colors ${
            contentsfilter === ContentsFilterType.ARTICLE
              ? "border-none bg-gradient-to-r from-[#B0B5DF] to-[#EEDBE0] !font-semibold text-white"
              : "border-gray-200 px-4 text-[var(--sub-color)]"
          }`}
          onClick={() => setContentsFilter(ContentsFilterType.ARTICLE)}
        >
          글
        </CommonPillButton>
        <CommonPillButton
          className={`!size-fit shrink-0 px-4 transition-colors ${
            contentsfilter === ContentsFilterType.PODCAST
              ? "border-none bg-gradient-to-r from-[#B0B5DF] to-[#EEDBE0] !font-semibold text-white"
              : "border-gray-200 px-4 text-[var(--sub-color)]"
          }`}
          onClick={() => setContentsFilter(ContentsFilterType.PODCAST)}
        >
          팟캐스트
        </CommonPillButton>
        <CommonPillButton
          className={`!size-fit shrink-0 px-4 transition-colors ${
            contentsfilter === ContentsFilterType.YOUTUBE
              ? "border-none bg-gradient-to-r from-[#B0B5DF] to-[#EEDBE0] !font-semibold text-white"
              : "border-gray-200 px-4 text-[var(--sub-color)]"
          }`}
          onClick={() => setContentsFilter(ContentsFilterType.YOUTUBE)}
        >
          유튜브
        </CommonPillButton>
      </div>
    </div>
  );
};

export default DiscoveryFilterController;
