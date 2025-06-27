import AdminPageDataProvider from "@/app/admin/(home)/components/AdminPageDataProvider";
import AdminPaginationController from "@/app/admin/(home)/components/adminPaginationController/AdminPaginationController";
import AdminRowList from "@/app/admin/(home)/components/adminRowList/AdminRowList";
import { getAdminPublishers } from "@/function/get/admin";
import { formatPublisherData } from "@/function/util/format";
import { FormattedPublisher } from "@/types/format";
import { redirect } from "next/navigation";
import AdminRowControllerContainer from "../components/adminRowControllerContainer/AdminRowControllerContainer";

const Publisher = async ({
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
  const publisherData = await getAdminPublishers();
  const formattedData = formatPublisherData(publisherData.items);

  return (
    <AdminPageDataProvider<FormattedPublisher[]> initialData={formattedData}>
      <AdminRowControllerContainer />
      <AdminRowList<FormattedPublisher>
        keys={[
          "PublisherName",
          "InstagramID",
          "LogoLink",
          "URL",
          "URLType",
          "BookISBN",
          "Memo",
          "Tag",
        ]}
      ></AdminRowList>
      <AdminPaginationController />
    </AdminPageDataProvider>
  );
};

export default Publisher;
