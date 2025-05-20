import Image from "next/image";

const AuthorPage = () => {
  return (
    // <main className="relative flex size-full flex-col items-center">
    //   <Suspense fallback={<LoadingSpinner className="h-[50vh] w-full" />}>
    //     <AuthorGridContainer />
    //   </Suspense>
    // </main>
    <div className="relative w-full" style={{ height: "calc(100vh)" }}>
      <Image
        fill
        src="/images/작가.png"
        alt="작가이미지"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default AuthorPage;
