import { HTMLAttributes } from "react";
import AdminSearchBar from "./AdminSearchBar";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const AdminHeader = ({ className, ...props }: Readonly<Props>) => {
  return (
    <header className={`relative flex w-full flex-row py-10 ${className || ""}`} {...props}>
      <div className="relative flex w-1/4 items-center">
        <h1 className="pl-[50%] text-2xl font-bold">HBD</h1>
      </div>
      <AdminSearchBar />
    </header>
  );
};

export default AdminHeader;
