import LoadingSpinner from "@/components/common/LoadingSpinner";
import getBirthdayBook from "@/function/server/getBirtdayBook";
import { Suspense } from "react";
import BirthDayBookSaveHelper from "./components/BirthDayBookSaveHelper";
import Discovery from "@/components/discovery/Discovery";
import TodayLibrary from "./components/todayLibrary/TodayLibrary";
import MainScheduleSlide from "./components/mainScheduleSlide/MainScheduleSlide";
import MainBookSlide from "./components/mainBookSlide/MainBookSlide";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      <Suspense fallback={<LoadingSpinner className="h-[30vw] w-full" />}>
        <MainBookSlideContainer />
      </Suspense>
      <Discovery />
      <TodayLibrary pageCount={3} />
      <MainScheduleSlide />
    </main>
  );
};

export default Home;

const MainBookSlideContainer = async () => {
  const data = await getBirthdayBook();
  return (
    <>
      <BirthDayBookSaveHelper books={data} />
      <MainBookSlide books={data.slice(0, 6)} />
    </>
  );
};
