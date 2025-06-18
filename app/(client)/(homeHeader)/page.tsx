import LoadingSpinner from "@/components/common/LoadingSpinner";
import DiscoveryDemo from "@/components/discovery/DiscoveryDemo";
import { Suspense } from "react";
import MainBookSlide from "./components/mainBookSlide/MainBookSlide";
import MainScheduleSlideDemo from "./components/mainScheduleSlide/MainScheduleSlideDemo";
import TodayLibraryDemo from "./components/todayLibrary/TodayLibraryDemo";
export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      <MainBookSlide className="mb-12" />
      <Suspense fallback={<LoadingSpinner className="w-full" />}>
        <DiscoveryDemo />
      </Suspense>
      <Suspense fallback={<LoadingSpinner className="w-full" />}>
        <TodayLibraryDemo />
      </Suspense>
      <MainScheduleSlideDemo />
    </main>
  );
};

export default Home;
