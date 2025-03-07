import { redirect } from "next/navigation";
import PageDataProvider from "@/context/PageDataProvider";
import AdminRowControllerContainer from "@/components/adminRowController/AdminRowControllerContainer";
import AdminRowList from "@/components/adminRowList/AdminRowList";
import AdminPaginationController from "@/components/adminPaginationController/AdminPaginationController";
import { AdminPublisherInputs } from "@/components/popupProvider/adminForm/AdminPublisherForm";

const Publisher = async ({ searchParams }: { searchParams: Promise<{ keyword?: string }> }) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  console.log("searchParams 테스트", keyword);

  return (
    <PageDataProvider<AdminPublisherInputs[]>
      initialData={[
        {
          publisherName: "test",
          instagramId: "test",
          urls: [{ value: "test", type: "Link" }],
          memo: "test",
          tag: "test",
        },
      ]}
    >
      <AdminRowControllerContainer />
      <AdminRowList<AdminPublisherInputs[]>
        keys={[
          "isbn",
          "urls",
          "urlsasdfasdfafsasdfasfd",
          "312342344",
          "memo",
          "publisherName",
          "312342564",
          "31264663264",
          "31264663264",
          "tag",
          "311234",
        ]}
      ></AdminRowList>
      <AdminPaginationController />
    </PageDataProvider>
  );
};

export default Publisher;
