import AdminPageDataProvider from "@/app/admin/(home)/components/AdminPageDataProvider";
import AdminPaginationController from "@/app/admin/(home)/components/adminPaginationController/AdminPaginationController";
import AdminRowList from "@/app/admin/(home)/components/adminRowList/AdminRowList";
import { PublisherDto } from "@/types/dto";
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

  return (
    <AdminPageDataProvider<PublisherDto[]>
      initialData={[
        {
          name: "test",
          engName: "test",
          urls: [{ url: "test", type: "Link" }],
          id: 0,
          isOfficial: false,
        },
      ]}
    >
      <AdminRowControllerContainer />
      <AdminRowList<PublisherDto[]>
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

export default Publisher;
