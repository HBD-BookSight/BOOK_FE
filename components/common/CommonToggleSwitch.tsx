import React, { HTMLAttributes } from "react";

type Props = {
  className?: string;
  htmlFor?: string;
} & HTMLAttributes<HTMLLabelElement>;
const CommonToggleSwitch = ({ className, ...props }: Readonly<Props>) => {
  return (
    <label className={`relative flex cursor-pointer items-center ${className || ""}`} {...props}>
      <input type="checkbox" className="peer sr-only" />
      <div className="peer h-6 w-10 rounded-full bg-gray-200 after:absolute after:left-[4px] after:top-[2px] after:size-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[var(--highlight-color)] peer-checked:after:translate-x-full peer-focus:ring-2" />
    </label>
  );
};

export default CommonToggleSwitch;
