import LoadingSpinner from "@/components/common/LoadingSpinner";
import Discovery from "@/components/discovery/Discovery";
import { Suspense } from "react";
import MainBookSlide from "./components/mainBookSlide/MainBookSlide";
import MainScheduleSlide from "./components/mainScheduleSlide/MainScheduleSlide";
import TodayLibrary from "./components/todayLibrary/TodayLibrary";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      <MainBookSlide />
      <Suspense fallback={<LoadingSpinner className="w-full" />}>
        <Discovery />
      </Suspense>
      <Suspense fallback={<LoadingSpinner className="w-full" />}>
        <TodayLibrary />
      </Suspense>
      <MainScheduleSlide />
    </main>
  );
};

export default Home;

// const MainBookSlideContainer = async () => {
//   const data = await getBirtdayBook();
//   return <MainBookSlide className="mb-12" books={data} />;
// };
