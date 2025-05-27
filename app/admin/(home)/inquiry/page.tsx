import { AdminInquiryInputs } from "@/components/popupProvider/adminForm/AdminInquiryForm";
import { redirect } from "next/navigation";
import AdminPageDataProvider from "../components/AdminPageDataProvider";
import AdminPaginationController from "../components/adminPaginationController/AdminPaginationController";
import AdminRowControllerContainer from "../components/adminRowControllerContainer/AdminRowControllerContainer";
import AdminRowList from "../components/adminRowList/AdminRowList";

const Inquiry = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string }>;
}) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  console.log("searchParams 테스트", keyword);

  return (
    <AdminPageDataProvider<AdminInquiryInputs[]> initialData={[]}>
      <AdminRowControllerContainer />
      <AdminRowList<AdminInquiryInputs[]>
        keys={[
          "isbn",
          "title",
          "publishedDate",
          "detailUrl",
          "translator",
          "price",
          "authorNameList",
          "publisherId",
        ]}
      ></AdminRowList>
      <AdminPaginationController />
    </AdminPageDataProvider>
  );
};

export default Inquiry;
