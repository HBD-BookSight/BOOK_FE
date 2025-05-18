"use client";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import { usePopupAction } from "@/context/popupStore";
import { useRouter } from "next/navigation";
import { forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

    const onSubmitHandler = (data: FieldValues) => {
      console.log(data);
      closePopup(); //성공시 모달 종료
      router.refresh();
    };
    const onErrorHandler = (data: FieldValues) => {
      console.log(data);
    };

    useImperativeHandle(
      ref,
      () => ({
        handleSubmit: handleSubmit(onSubmitHandler, onErrorHandler),
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
          onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
        >
          <div>
            <CommonLabel
              htmlFor="senderName"
              className="text-[var(--sub-color)]"
            >
              문의자 성함
            </CommonLabel>
            <CommonInputField id="senderName" {...register("senderName")} />
          </div>
          <div>
            <CommonLabel
              htmlFor="senderEmail"
              className="text-[var(--sub-color)]"
            >
              문의자 이메일
            </CommonLabel>
            <CommonInputField id="senderEmail" {...register("senderEmail")} />
          </div>
          <div>
            <CommonLabel htmlFor="memo" className="text-[var(--sub-color)]">
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
