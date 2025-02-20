import { HTMLAttributes } from "react";
import SearchIcon from "../icons/searchIcon.svg";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const SearchBar = ({ className, ...props }: Readonly<Props>) => {
  return (
    <div className={`relative w-full bg-white px-[var(--root-layout-margin)] py-3 ${className || ""}`} {...props}>
      <div className="relative flex w-full flex-row rounded-2xl border p-1">
        <SearchIcon className="w-11 text-[var(--sub-color)]" />
        <input
          className="w-full bg-transparent outline-none"
          placeholder="제목, 작가, 출판사를 검색하세요"
          type="search"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
