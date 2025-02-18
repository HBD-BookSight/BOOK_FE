import HomeHeader from "@/components/homeHeader/HomeHeader";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
};

export default layout;
