import LoadingSpinner from "@/components/common/LoadingSpinner";
import Discovery from "@/components/discovery/Discovery";
import getBirthdayBook from "@/function/server/getBirtdayBook";
import { Suspense } from "react";
import BirthDayBookSaveHelper from "./components/BirthDayBookSaveHelper";
import MainBookSlideDemo from "./components/mainBookSlide/demo/MainBookSlideDemo";
import MainScheduleSlide from "./components/mainScheduleSlide/MainScheduleSlide";
import TodayLibrary from "./components/todayLibrary/TodayLibrary";
export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      {/* <MainBookSlide /> */}
      <MainBookSlideContainer />
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

const MainBookSlideContainer = async () => {
  const data = await getBirthdayBook();
  return (
    <>
      <BirthDayBookSaveHelper books={data} />
      <MainBookSlideDemo books={data.slice(0, 6)} />
    </>
  );
};
