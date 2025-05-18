import PopupProvider from "@/components/popupProvider/PopupProvider";
import "../globals.css";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const AdminLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className={`relative mx-auto flex h-full min-h-screen w-screen flex-col bg-white antialiased`}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="relative mx-auto flex size-full flex-1 flex-col">{children}</div>
      <PopupProvider />
    </div>
  );
};
export default AdminLayout;
