import PopupProvider from "@/components/popupProvider/PopupProvider";
import "../globals.css";
import { ReactNode } from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <body className={`relative mx-auto flex h-full min-h-screen w-screen flex-col bg-white antialiased`}>
        <div className="relative mx-auto flex size-full flex-1 flex-col">{children}</div>
        <PopupProvider />
      </body>
    </>
  );
};
export default AdminLayout;
