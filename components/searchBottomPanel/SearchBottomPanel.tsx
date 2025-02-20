import { HTMLAttributes } from "react";
import SearchBar from "./SearchBar";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const SearchBottomPanel = ({ className, ...props }: Readonly<Props>) => {
  return (
    <section
      className={`absolute bottom-0 z-[40] size-full bg-[#FFFFFFD9] backdrop-blur-[5px] ${className || ""}`}
      {...props}
    >
      <SearchBar />
    </section>
  );
};

export default SearchBottomPanel;
