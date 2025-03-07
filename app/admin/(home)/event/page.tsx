import AdminPaginationController from "@/components/adminPaginationController/AdminPaginationController";
import AdminRowControllerContainer from "@/components/adminRowController/AdminRowControllerContainer";
import AdminRowList from "@/components/adminRowList/AdminRowList";
import { AdminEventInputs } from "@/components/popupProvider/adminForm/AdminEventForm";
import PageDataProvider from "@/context/PageDataProvider";
import { redirect } from "next/navigation";

const Event = async ({ searchParams }: { searchParams: Promise<{ keyword?: string }> }) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  console.log("searchParams 테스트", keyword);

  return (
    <PageDataProvider<AdminEventInputs[]> initialData={[]}>
      <AdminRowControllerContainer />
      <AdminRowList<AdminEventInputs[]>
        keys={[
          "isbn",
          "urls",
          "urlsasdfasdfafsasdfasfd",
          "312342344",
          "312342564",
          "312342344",
          "312342564",
          "31264663264",
          "31264663264",
          "31434636",
          "311234",
        ]}
      ></AdminRowList>
      <AdminPaginationController />
    </PageDataProvider>
  );
};

export default Event;
