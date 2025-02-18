import Link from "next/link";
import { HTMLAttributes } from "react";
import HomeIcon from "../icons/homeIcon.svg";
import SearchIcon from "../icons/searchIcon.svg";
import ExploreIcon from "../icons/exploreIcon.svg";

type Props = {} & HTMLAttributes<HTMLDivElement>;
const BottomNav = ({ className, ...props }: Readonly<Props>) => {
  return (
    <div className={`sticky bottom-0 w-full pb-[var(--root-layout-safe-area)] ${className || ""}`} {...props}>
      <div className="z-40 mx-auto flex w-fit justify-around gap-[var(--root-layout-safe-area)] rounded-full bg-opacity-85 stroke-2 p-2 px-4 text-[var(--sub-color)] shadow-[0_0_var(--root-layout-safe-area)_rgba(0,0,0,0.12)] backdrop-blur-[5px]">
        <Link href={"/"}>
          <HomeIcon className="" />
        </Link>
        <Link href={"/"}>
          <SearchIcon />
        </Link>
        <Link href={"/"}>
          <ExploreIcon />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
