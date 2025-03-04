import { redirect } from "next/navigation";
import AdminControlBarContainer from "./AdminControlBarContainer";
import { Suspense } from "react";

const Content = async ({ searchParams }: { searchParams: Promise<{ keyword?: string }> }) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  return (
    <>
      <Suspense>
        <AdminControlBarContainer />
      </Suspense>
      {keyword}
    </>
  );
};

export default Content;
