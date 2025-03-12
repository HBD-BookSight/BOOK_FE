import "./clientLayout.css";
import { ReactNode } from "react";
import BottomNavLayout from "./BottomNavLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const ClientLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <body
      className={`relative mx-auto flex h-full min-h-screen w-screen flex-col bg-white antialiased sm:max-w-[640px]`}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="relative mx-auto flex size-full flex-1 flex-col">{children}</div>
      <BottomNavLayout />
    </body>
  );
};

export default ClientLayout;
