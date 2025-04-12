import { ReactNode } from "react";
import AdminHeader from "./components/adminHeader/AdminHeader";
import AdminSideNav from "./components/adminSideNav/AdminSideNav";

const AdminHomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="relative flex flex-1 flex-col">
      <AdminHeader />
      <div className="relative flex flex-1 flex-row overflow-hidden">
        <AdminSideNav />
        <div className="relative mx-16 flex flex-1 flex-col overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
export default AdminHomeLayout;
