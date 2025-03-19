import { redirect } from "next/navigation";
import AdminRowControllerContainer from "../../../../components/adminRowController/AdminRowControllerContainer";
import AdminPageDataProvider from "@/context/AdminPageDataProvider";
import AdminRowList from "@/components/adminRowList/AdminRowList";
import { AdminContentInputs } from "@/components/popupProvider/adminForm/AdminContentForm";
import AdminPaginationController from "@/components/adminPaginationController/AdminPaginationController";

const Content = async ({ searchParams }: { searchParams: Promise<{ keyword?: string }> }) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  console.log("searchParams 테스트", keyword);

  return (
    <AdminPageDataProvider<AdminContentInputs[]>
      initialData={[
        { isbns: [{ value: 123123123 }], urls: [{ value: "asdassdfasdf", type: "Video" }] },
        { isbns: [{ value: 123 }, { value: 123 }], urls: [{ value: "123", type: "Video" }] },
      ]}
    >
      <AdminRowControllerContainer />
      <AdminRowList<AdminContentInputs[]>
        keys={[
          "isbns",
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
    </AdminPageDataProvider>
  );
};

export default Content;
