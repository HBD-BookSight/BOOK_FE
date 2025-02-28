"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import CommonPillButton from "../common/CommonPillButton";
import CommonLabel from "../common/CommonLabel";

type Props = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
const AdminSideNav = ({ className, ...props }: Readonly<Props>) => {
  const pathname = usePathname();
  return (
    <nav className={`sticky left-0 top-0 flex w-1/4 ${className || ""}`} {...props}>
      <div className="relative flex size-full flex-col gap-5 py-12 pl-[50%] font-semibold">
        <CommonLabel className="!size-fit">menu</CommonLabel>
        <Link href="/admin/content" className={`${pathname === "/admin/content" ? "" : "text-[var(--sub-color)]"}`}>
          추천 컨텐츠
        </Link>
        <Link href="/admin/event" className={`${pathname === "/admin/event" ? "" : "text-[var(--sub-color)]"}`}>
          다가오는 일정
        </Link>
        <Link href="/admin/publisher" className={`${pathname === "/admin/publisher" ? "" : "text-[var(--sub-color)]"}`}>
          출판사
        </Link>

        <CommonPillButton className="mt-auto !h-fit">로그아웃</CommonPillButton>
      </div>
    </nav>
  );
};

export default AdminSideNav;
