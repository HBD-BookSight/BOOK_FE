import { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const HomeHeader = ({ className, ...etc }: Readonly<Props>) => {
  return (
    <div
      className={`sticky top-0 z-40 w-full bg-opacity-85 p-[var(--root-layout-safe-area)] text-lg font-semibold backdrop-blur-[var(--root-layout-safe-area)] ${
        className || ""
      }`}
      {...etc}
    >
      HBD
    </div>
  );
};

export default HomeHeader;
