import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import SearchBar from "./SearchBar";

type Props = {
  className?: string;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
} & HTMLAttributes<HTMLDivElement>;
const SearchBottomPanel = ({ className, setIsSearchOpen, ...props }: Readonly<Props>) => {
  return (
    <section
      className={`absolute bottom-0 z-[40] size-full bg-[#FFFFFFD9] backdrop-blur-[5px] ${className || ""}`}
      {...props}
    >
      <SearchBar setIsSearchOpen={setIsSearchOpen} />
    </section>
  );
};

export default SearchBottomPanel;
