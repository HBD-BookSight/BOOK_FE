import { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const HomeHeader = ({ className, ...etc }: Readonly<Props>) => {
  return (
    <h1
      className={`sticky top-0 z-40 w-full bg-[#FFFFFFD9] bg-opacity-85 p-[var(--root-layout-margin)] text-lg font-semibold backdrop-blur-[5px] ${
        className || ""
      }`}
      {...etc}
    >
      HBD
    </h1>
  );
};

export default HomeHeader;
