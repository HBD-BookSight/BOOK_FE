import HomeHeader from "@/components/homeHeader/HomeHeader";

const homeHeaderlayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
};

export default homeHeaderlayout;
