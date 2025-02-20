"use client";
import BottomNav from "@/components/bottomNav/BottomNav";
import SearchBottomPanel from "@/components/searchBottomPanel/SearchBottomPanel";
import { useState } from "react";

const BottomNavLayout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  return (
    <>
      {isSearchOpen && <SearchBottomPanel />}
      <BottomNav isSearchOpen={isSearchOpen} setSearchOpen={setIsSearchOpen} />
    </>
  );
};

export default BottomNavLayout;
