import { BookCreateRequest, ContentsDto } from "@/types/dto";
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
  console.log("searchParams 테스트", keyword);

  return (
    <AdminPageDataProvider<ContentsDto[]>
      initialData={[
        {
          id: 7281778282,
          urls: [{ url: "www.mock.com", type: "Link" }],
          creator: { id: 12, name: "마치", bookIsbnList: [124, 2892, 711] },
        },
        {
          id: 7281778283,
          urls: [{ url: "www.mock2.com", type: "Link" }],
          creator: {
            id: 12,
            name: "윤마치",
            bookIsbnList: [1124, 21892, 7111],
          },
        },
      ]}
    >
      <AdminRowControllerContainer />
      <AdminRowList<BookCreateRequest[]>
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

export default Content;
