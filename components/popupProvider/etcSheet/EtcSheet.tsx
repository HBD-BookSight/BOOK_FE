"use client";
import { usePopupAction } from "@/context/popupStore";
import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

type Props = { className?: string; children?: ReactNode } & HTMLAttributes<HTMLDivElement>;
const EtcSheet = ({ className, children, ...props }: Readonly<Props>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isGrab, setIsGrab] = useState(false);
  const [initialHeight, setInitalHeight] = useState<number>(0);
  const { closePopup } = usePopupAction();

  useEffect(() => {
    if (ref.current) {
      setInitalHeight(ref.current.offsetHeight);
    }
    const releaseHandler = () => {
      setIsGrab(false);
    };
    document.addEventListener("mouseup", releaseHandler);
    return () => document.removeEventListener("mouseup", releaseHandler);
  }, []);

  useEffect(() => {
    const sheetSizeHandler = (e: MouseEvent) => {
      if (isGrab && ref.current) {
        ref.current.style.height = Math.min(initialHeight, ref.current.offsetHeight - (e.movementY || 0)) + "px";
        if (isGrab && ref.current && ref.current.offsetHeight <= 80) {
          closePopup();
        }
      }
    };
    document.addEventListener("mousemove", sheetSizeHandler);
    return () => document.removeEventListener("mousemove", sheetSizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGrab, initialHeight]);

  return (
    <div
      className={`flex size-fit w-full select-none flex-col gap-6 rounded-t-[40px] bg-white p-6 font-semibold shadow-[0_0_20px_0_rgba(0,0,0,0.12)] ${
        className || ""
      }`}
      ref={ref}
      {...props}
    >
      <div
        className="mx-auto h-4 w-16 shrink-0 cursor-grab border-t-4 border-gray-300"
        onMouseDown={() => setIsGrab((prev) => !prev)}
      ></div>
      {children}
    </div>
  );
};

export default EtcSheet;
