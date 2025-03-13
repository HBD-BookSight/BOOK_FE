import LoadingSpinner from "@/components/common/LoadingSpinner";
import MainBookSlide from "@/components/mainBookSlide/MainBookSlide";
import MainScheduleSlide from "@/components/mainScheduleSlide/MainScheduleSlide";
import PromotionContract from "@/components/promotionContract/PromotionContract";
import getBirtdayBook from "@/function/server/getBirtdayBook";
import { Suspense } from "react";
import BirthDayBookSaveHelper from "./BirthDayBookSaveHelper";

//현재옵션으로 페이지는 1년마다 재렌더링 되지만 vercel 크론잡으로 매일 0시에 강제로 재렌더링함 isr로 만들기위해 사용하는 옵션임(isr페이지는 렌더링 시간동안 보여줄 스테일 페이지를 제공함)
export const revalidate = 31536000;
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
  return (
    <>
      <BirthDayBookSaveHelper books={data} />
      <MainBookSlide className="mb-12" books={data.slice(0, 6)} />
    </>
  );
};
