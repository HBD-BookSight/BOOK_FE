import { getAdminContents } from "@/function/get/admin";
import { formatContentsData } from "@/function/util/format";
import { FormattedContents } from "@/types/format";
import { redirect } from "next/navigation";
import AdminPageDataProvider from "../components/AdminPageDataProvider";
import AdminPaginationController from "../components/adminPaginationController/AdminPaginationController";
import AdminRowControllerContainer from "../components/adminRowControllerContainer/AdminRowControllerContainer";
import AdminRowList from "../components/adminRowList/AdminRowList";

const Content = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string }>;
}) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  console.log(keyword, "searchParams 테스트");

  const contentsData = await getAdminContents();
  console.log(contentsData,'콘텐트 데이터');
  
  const formattedData = formatContentsData(contentsData.items);
  return (
    <AdminPageDataProvider<FormattedContents[]> initialData={formattedData}>
      <AdminRowControllerContainer />
      <AdminRowList<FormattedContents>
        keys={["URL", "BookISBN", "contentTitle", "BookName", "Memo", "Tag"]}
      ></AdminRowList>
      <AdminPaginationController />
    </AdminPageDataProvider>
  );
};

export default Content;
