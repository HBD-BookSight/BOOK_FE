import AdminHeader from "@/components/adminHeader/AdminHeader";
import AdminSideNav from "@/components/adminSideNav/AdminSideNav";
import { ReactNode } from "react";

const AdminHomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="relative flex size-full flex-1 flex-col">
      <AdminHeader />
      <div className="relative mx-auto flex size-full flex-1 flex-row">
        <AdminSideNav />
        <div className="relative flex-1 px-16">{children}</div>
      </div>
    </div>
  );
};
export default AdminHomeLayout;
