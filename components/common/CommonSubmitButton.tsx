import { HTMLAttributes, ReactNode } from "react";
type Props = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;
const CommonPillButton = ({
  children,
  className,
  ...props
}: Readonly<Props>) => {
  return (
    <button
      className={`relative flex size-full items-center justify-center rounded-full bg-[#F8F8FE] py-7 text-lg text-[var(--highlight-color)] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonPillButton;
