import React, { HTMLAttributes } from "react";

type Props = {
  className?: string;
  htmlFor?: string;
} & HTMLAttributes<HTMLLabelElement>;
const CommonInputFieldLabel = ({ className, ...props }: Props) => {
  return (
    <label
      className={`relative size-full text-sm font-semibold text-[var(--highlight-color)] ${className || ""}`}
      {...props}
    ></label>
  );
};

export default CommonInputFieldLabel;
