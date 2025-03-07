"use client";

import { HTMLAttributes, useRef } from "react";
import CommonPillButton from "../common/CommonPillButton";
import { usePopupActon } from "@/context/popupStore";
import AdminDeleteForm, { AdminDeleteFormRef } from "../popupProvider/adminForm/AdminDeleteForm";
import AlertPopupModal from "../popupProvider/AlertPopupModal";
import AdminPopupModal from "../popupProvider/AdminPopupModal";
import AdminContentForm, { AdminContentFormRef, AdminContentInputs } from "../popupProvider/adminForm/AdminContentForm";
import AdminEventForm, { AdminEventFormRef, AdminEventInputs } from "../popupProvider/adminForm/AdminEventForm";
import AdminPublisherForm, {
  AdminPublisherFormRef,
  AdminPublisherInputs,
} from "../popupProvider/adminForm/AdminPublisherForm";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  resultLength?: string;
  selectRow: number | undefined;
  defaultValues?: AdminContentInputs | AdminEventInputs | AdminPublisherInputs;
} & HTMLAttributes<HTMLDivElement>;

const AdminRowController = ({ className, resultLength, selectRow, defaultValues, ...props }: Readonly<Props>) => {
  const { openPopup, closePopup } = usePopupActon();
  const adminDeleteFormRef = useRef<AdminDeleteFormRef>(null);
  const AltFormComponentRef = useRef<AdminContentFormRef | AdminEventFormRef | AdminPublisherFormRef>(null);
  const pathName = usePathname();

  const setRow = (pathName: string, defaultValues?: AdminContentInputs | AdminEventInputs | AdminPublisherInputs) => {
    openPopup(
      <AdminPopupModal>
        {pathName === "/admin/content" ? (
          <AdminContentForm ref={AltFormComponentRef} defaultValues={defaultValues as AdminContentInputs} />
        ) : pathName === "/admin/event" ? (
          <AdminEventForm ref={AltFormComponentRef} defaultValues={defaultValues as AdminEventInputs} />
        ) : (
          <AdminPublisherForm ref={AltFormComponentRef} defaultValues={defaultValues as AdminPublisherInputs} />
        )}
      </AdminPopupModal>,
      closePopup,
      () => {
        AltFormComponentRef.current?.handleSubmit();
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
        <CommonPillButton onClick={() => setRow(pathName)} className="h-8 w-20 bg-[var(--highlight-color)] text-white">
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
          onClick={() => selectRow !== undefined && setRow(pathName, defaultValues)}
          className="h-8 w-20 border-gray-200 text-[var(--sub-color)]"
        >
          Edit
        </CommonPillButton>
      </span>
    </div>
  );
};

export default AdminRowController;
