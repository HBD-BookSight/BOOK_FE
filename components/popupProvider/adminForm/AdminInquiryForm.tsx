"use client";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import { usePopupAction } from "@/context/popupStore";
import { postContacts } from "@/function/post/admin";
import { useRouter } from "next/navigation";
import { forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";

type Props = {
  className?: string;
  defaultValues?: AdminInquiryInputs;
} & HTMLAttributes<HTMLDivElement>;

export type AdminInquiryInputs = {
  senderName: string;
  senderEmail: string;
  memo: string;
};

export type AdminInquiryFormRef = {
  handleSubmit: () => void;
};

const AdminInquiryForm = forwardRef<AdminInquiryFormRef, Props>(
  ({ className, defaultValues, ...props }, ref) => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<AdminInquiryInputs>({
      mode: "onSubmit",
      defaultValues: defaultValues,
    });
    const { closePopup } = usePopupAction();

    const onSubmitHandler = async (data: AdminInquiryInputs) => {
      const res = await postContacts(data);
      console.log(res, " 문의 등록 결과");
      closePopup(); //성공시 모달 종료
      router.refresh();
    };

    useImperativeHandle(
      ref,
      () => ({
        handleSubmit: handleSubmit(onSubmitHandler),
      }),
      [handleSubmit] // eslint-disable-line
    );

    return (
      <div
        className={`relative flex size-full flex-col ${className || ""}`}
        {...props}
      >
        <h2 className="flex justify-center text-sm font-semibold text-[var(--sub-color)]">
          기타 문의
        </h2>
        <form
          className="relative flex size-full max-h-[80vh] flex-col gap-6 overflow-auto py-6"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="flex flex-col gap-3">
            <CommonLabel
              htmlFor="senderName"
              className="text-[var(--highlight-color)]"
            >
              문의자 성함
            </CommonLabel>
            <CommonInputField id="senderName" {...register("senderName")} />
          </div>
          <div className="flex flex-col gap-3">
            <CommonLabel
              htmlFor="senderEmail"
              className="text-[var(--highlight-color)]"
            >
              문의자 이메일
            </CommonLabel>
            <CommonInputField id="senderEmail" {...register("senderEmail")} />
          </div>
          <div className="flex flex-col gap-3">
            <CommonLabel
              htmlFor="memo"
              className="text-[var(--highlight-color)]"
            >
              전하고 싶은 말
            </CommonLabel>
            <CommonInputField id="memo" {...register("memo")} />
          </div>
        </form>
      </div>
    );
  }
);

AdminInquiryForm.displayName = "AdminInquiryForm";
export default AdminInquiryForm;
