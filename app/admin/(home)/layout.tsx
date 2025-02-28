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
        {children}
      </div>
    </div>
  );
};
export default AdminHomeLayout;
