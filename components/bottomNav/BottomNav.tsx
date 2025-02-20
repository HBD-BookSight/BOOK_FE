"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import HomeIcon from "../icons/homeIcon.svg";
import SearchIcon from "../icons/searchIcon.svg";
import ExploreIcon from "../icons/exploreIcon.svg";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Props = {} & HTMLAttributes<HTMLDivElement>;
type Tab = "home" | "search" | "explore" | null;
const BottomNav = ({ className, ...props }: Readonly<Props>) => {
  const [tab, setTab] = useState<Tab>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setTab("home");
    } else if (pathname === "/explore") {
      setTab("explore");
    } else {
      setTab(null);
    }
  }, [pathname]);

  const handleHomeClick = () => {
    setTab("home");
    router.push("/");
  };
  const handleSearchClick = () => {
    setTab("search");
    router.push("/");
  };
  const handleExploreClick = () => {
    setTab("explore");
    router.push("/");
  };

  return (
    <div className={`sticky bottom-0 z-40 w-full pb-[var(--root-layout-margin)] ${className || ""}`} {...props}>
      <div className="mx-auto flex w-fit justify-around gap-[var(--root-layout-margin)] rounded-full bg-[#FFFFFFD9] stroke-2 px-10 py-3 text-[var(--sub-color)] shadow-[0_0_var(--root-layout-margin)_rgba(0,0,0,0.12)] backdrop-blur-[20px]">
        <button onClick={handleHomeClick}>
          {tab === "home" && (
            <motion.div
              className="pointer-events-none absolute z-[40] size-14 rounded-full bg-[#5f69be26]"
              layoutId="highlight"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <HomeIcon className="relative z-[41]" />
        </button>

        <button onClick={handleSearchClick}>
          {tab === "search" && (
            <motion.div
              className="pointer-events-none absolute size-14 rounded-full bg-[#5f69be26]"
              layoutId="highlight"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <SearchIcon className="relative z-[41]" />
        </button>

        <button onClick={handleExploreClick}>
          {tab === "explore" && (
            <motion.div
              className="pointer-events-none absolute size-14 rounded-full bg-[#5f69be26]"
              layoutId="highlight"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <ExploreIcon className="relative z-[41]" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
