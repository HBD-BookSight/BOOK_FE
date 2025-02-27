import "../globals.css";
import { ReactNode } from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <body
        className={`relative mx-auto flex h-full min-h-screen w-screen flex-col bg-white antialiased xl:max-w-[1280px]`}
      >
        <div className="relative mx-auto flex size-full flex-1 flex-col">{children}</div>
      </body>
    </>
  );
};
export default AdminLayout;
