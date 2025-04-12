import { AdminEventInputs } from "@/components/popupProvider/adminForm/AdminEventForm";
import { redirect } from "next/navigation";
import AdminRowControllerContainer from "../components/adminRowControllerContainer/AdminRowControllerContainer";
import AdminPageDataProvider from "../components/AdminPageDataProvider";
import AdminRowList from "../components/adminRowList/AdminRowList";
import AdminPaginationController from "../components/adminPaginationController/AdminPaginationController";

const Event = async ({ searchParams }: { searchParams: Promise<{ keyword?: string }> }) => {
  if (false) {
    //서버에서 권한 인증 통신에 성공하지 못한경우 리다이렉트
    redirect("/admin/login");
  }
  const { keyword } = await searchParams;
  console.log("searchParams 테스트", keyword);

  return (
    <AdminPageDataProvider<AdminEventInputs[]>
      initialData={[
        {
          urls: [{ value: "asdassdfasdf", type: "Video" }],
          eventTitle: "test",
          eventHost: "test",
          startDate: new Date(),
          endDate: new Date(),
          location: "Offline",
          eventType: "test",
          eventFlag: "Group",
          isPosting: true,
        },
      ]}
    >
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
    </AdminPageDataProvider>
  );
};

export default Event;
