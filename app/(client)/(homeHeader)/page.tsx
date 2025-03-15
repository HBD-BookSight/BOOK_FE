import LoadingSpinner from "@/components/common/LoadingSpinner";
import MainBookSlide from "@/components/mainBookSlide/MainBookSlide";
import MainScheduleSlide from "@/components/mainScheduleSlide/MainScheduleSlide";
import PromotionContract from "@/components/promotionContract/PromotionContract";
import getBirthdayBook from "@/function/server/getBirtdayBook";
import { Suspense } from "react";
import BirthDayBookSaveHelper from "./BirthDayBookSaveHelper";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      <Suspense fallback={<LoadingSpinner className="h-[30vw] w-full" />}>
        <MainBookSlideContainer />
      </Suspense>
      <MainScheduleSlide className="mb-5" />
      <PromotionContract />
    </main>
  );
};

export default Home;

const MainBookSlideContainer = async () => {
  const data = await getBirthdayBook();
  return (
    <>
      <BirthDayBookSaveHelper books={data} />
      <MainBookSlide className="mb-12" books={data.slice(0, 6)} />
    </>
  );
};
