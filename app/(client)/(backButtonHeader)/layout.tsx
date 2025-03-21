import BackbuttonHeader from "@/components/backButtonHeader/BackbuttonHeader";

const backButtonHeaderlayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <BackbuttonHeader />
      {children}
    </>
  );
};

export default backButtonHeaderlayout;
