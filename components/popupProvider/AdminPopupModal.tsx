import { usePopupState } from "@/context/popupStore";
import { HTMLAttributes, ReactNode } from "react";
import CommonPillButton from "../common/CommonPillButton";

type Props = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const AdminPopupModal = ({ className, children, ...props }: Readonly<Props>) => {
  const { closeCallback, confirmCallback } = usePopupState();
  return (
    <div
      className={`pointer-events-auto flex size-fit w-[400px] flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.12)] backdrop-blur-[20px] ${
        className || ""
      }`}
      {...props}
    >
      {children}
      <div className="flex size-full flex-row justify-center gap-2">
        <CommonPillButton
          onClick={confirmCallback}
          className="h-10 w-20 bg-[var(--highlight-color)] font-bold text-white"
        >
          확인
        </CommonPillButton>
        <CommonPillButton
          onClick={closeCallback}
          className="h-10 w-20 border-[--sub-color] font-bold text-[var(--sub-color)]"
        >
          취소
        </CommonPillButton>
      </div>
    </div>
  );
};

export default AdminPopupModal;
