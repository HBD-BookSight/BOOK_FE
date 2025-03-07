"use client";

import { HTMLAttributes, useRef } from "react";
import CommonPillButton from "../common/CommonPillButton";
import { usePopupActon } from "@/context/popupStore";
import AdminDeleteForm, { AdminDeleteFormRef } from "../popupProvider/adminForm/AdminDeleteForm";
import AlertPopupModal from "../popupProvider/AlertPopupModal";
import AdminPopupModal from "../popupProvider/AdminPopupModal";
import AdminContentForm, { AdminContentFormRef, AdminContentInputs } from "../popupProvider/adminForm/AdminContentForm";

type Props = {
  className?: string;
  resultLength?: string;
  selectRow: number | undefined;
  defaultValues?: AdminContentInputs;
} & HTMLAttributes<HTMLDivElement>;
const AdminRowController = ({ className, resultLength, selectRow, defaultValues, ...props }: Readonly<Props>) => {
  const { openPopup, closePopup } = usePopupActon();
  const adminDeleteFormRef = useRef<AdminDeleteFormRef>(null);
  const adminContentFormRef = useRef<AdminContentFormRef>(null);

  const addRow = (defaultValues?: AdminContentInputs) => {
    openPopup(
      <AdminPopupModal>
        <AdminContentForm ref={adminContentFormRef} defaultValues={defaultValues} />
      </AdminPopupModal>,
      closePopup,
      () => {
        adminContentFormRef.current?.handleSubmit();
      }
    );
  };
  const deleteRow = () => {
    openPopup(
      <AlertPopupModal>
        <AdminDeleteForm rowKey={selectRow} ref={adminDeleteFormRef} />
      </AlertPopupModal>,
      closePopup,
      () => {
        adminDeleteFormRef.current?.handleSubmit();
      }
    );
  };
  return (
    <div
      className={`relative flex h-16 w-full flex-row items-center justify-between !text-sm font-semibold ${
        className || ""
      }`}
      {...props}
    >
      <span className="flex flex-row items-center justify-center gap-7">
        <p className="text-sm font-semibold text-[var(--highlight-color)]">All {resultLength || "0"}</p>
        <CommonPillButton onClick={() => addRow()} className="h-8 w-20 bg-[var(--highlight-color)] text-white">
          Add row
        </CommonPillButton>
      </span>
      <span className="flex flex-row gap-2">
        <CommonPillButton
          onClick={selectRow !== undefined ? deleteRow : undefined}
          className="h-8 w-20 border-red-600 text-red-600"
        >
          Delete
        </CommonPillButton>
        <CommonPillButton
          onClick={() => addRow(defaultValues)}
          className="h-8 w-20 border-gray-200 text-[var(--sub-color)]"
        >
          Edit
        </CommonPillButton>
      </span>
    </div>
  );
};

export default AdminRowController;
