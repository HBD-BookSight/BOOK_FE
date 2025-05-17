"use client";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";

import CommonSubmitButton from "@/components/common/CommonSubmitButton";
import { usePopupAction } from "@/context/popupStore";
import { forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  className?: string;
  defaultValues?: EventPromotionFormTypes;
} & HTMLAttributes<HTMLDivElement>;

export type EventPromotionFormTypes = {
  senderName?: string;
  senderEmail: string;
  senderMessage: string;
};
export type AdminEventFormRef = {
  handleSubmit: () => void;
};
const EventPromotionForm = forwardRef<AdminEventFormRef, Props>(
  ({ className, defaultValues, ...props }, ref) => {
    console.log(defaultValues);
    const { register, handleSubmit } = useForm<EventPromotionFormTypes>({
      mode: "onSubmit",
      defaultValues: defaultValues,
    });

    const { closePopup } = usePopupAction();

    const onSubmitHandler = (data: FieldValues) => {
      console.log(data);
      closePopup();
    };

    const onErrorHandler = (data: FieldValues) => {
      console.log(data);
    };

    //시작일 설정시 자동으로 종료일이 설정되도록

    useImperativeHandle(
      ref,
      () => ({
        handleSubmit: handleSubmit(onSubmitHandler, onErrorHandler),
      }),
      [handleSubmit] // eslint-disable-line
    );

    return (
      <div
        className={`relative flex size-full flex-col overflow-auto ${
          className || ""
        }`}
        {...props}
      >
        <form
          className="relative flex size-full max-h-[80vh] flex-col justify-end gap-9 px-[var(--client-layout-margin)] py-6"
          onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
        >
          <div className="flex flex-col gap-3">
            <CommonLabel
              htmlFor="senderName"
              className="text-[var(--sub-color)]"
            >
              문의자 성함
            </CommonLabel>
            <CommonInputField
              id="senderName"
              className="py-3"
              {...register("senderName")}
            />
          </div>
          <div className="relative flex size-full flex-col gap-3">
            <CommonLabel htmlFor="senderEmail">
              <div className="flex gap-0.5 font-bold">
                문의자 이메일 <div className="text-[#FF2C6CFF]">*</div>{" "}
              </div>
            </CommonLabel>
            <CommonInputField
              id="senderEmail"
              className="py-3"
              {...register("senderEmail")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <CommonLabel htmlFor="senderMessage">
              <div className="flex gap-0.5 font-bold">
                전하고 싶은 말 <div className="text-[#FF2C6CFF]">*</div>{" "}
              </div>
            </CommonLabel>
            <CommonInputField
              className="py-3"
              id="senderMessage"
              {...register("senderMessage")}
            />
          </div>
          <div className="mt-10">
            <CommonSubmitButton>제출하기</CommonSubmitButton>
          </div>
        </form>
      </div>
    );
  }
);

EventPromotionForm.displayName = "EventPromotionForm";
export default EventPromotionForm;
