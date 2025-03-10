import LoadingSpinner from "@/components/common/LoadingSpinner";
import MainBookSlide from "@/components/mainBookSlide/MainBookSlide";
import MainScheduleSlide from "@/components/mainScheduleSlide/MainScheduleSlide";
import PromotionContract from "@/components/promotionContract/PromotionContract";
import getBirtdayBook from "@/function/server/getBirtdayBook";
import { Suspense } from "react";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      <Suspense fallback={<LoadingSpinner />}>
        <MainBookSlideContainer />
      </Suspense>
      <MainScheduleSlide className="mb-5" />
      <PromotionContract />
    </main>
  );
};

export default Home;

const MainBookSlideContainer = async () => {
  const data = await getBirtdayBook();
  return <MainBookSlide className="mb-12" books={data} />;
};
