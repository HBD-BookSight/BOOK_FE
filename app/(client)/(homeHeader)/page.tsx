import MainBookSlide from "@/components/mainBookSlide/MainBookSlide";
import MainScheduleSlide from "@/components/mainScheduleSlide/MainScheduleSlide";
import PromotionContract from "@/components/promotionContract/PromotionContract";

const Home = () => {
  return (
    <main className="relative flex size-full flex-col items-center py-5">
      <MainBookSlide className="mb-12" />
      <MainScheduleSlide className="mb-5" />
      <PromotionContract />
    </main>
  );
};

export default Home;
