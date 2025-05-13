"use client";
import CommonDropDown from "@/components/common/CommonDropDown";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import CommonSelectBox from "@/components/common/CommonSelectBox";
import CommonToggleSwitch from "@/components/common/CommonToggleSwitch";
import { usePopupAction } from "@/context/popupStore";
import CancleIcon from "@/public/icons/cancleIcon.svg";
import {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  Controller,
  FieldValues,
  useFieldArray,
  useForm,
} from "react-hook-form";

type Props = {
  className?: string;
  defaultValues?: AdminEventInputs;
} & HTMLAttributes<HTMLDivElement>;
export type AdminEventInputs = {
  urls: { value: string; type: "Video" | "Article" | "Podcast" | "Link" }[];
  eventTitle: string;
  eventHost: string;
  startDate: Date | string;
  endDate: Date | string;
  location: "Online" | "Offline" | "Online/Offline";
  eventType: string;
  eventFlag: "Solo" | "Group" | "etc";
  isPosting: boolean;
  isbn?: number;
  bookName?: string;
  senderName?: string;
  senderEmail?: string;
  senderMessage?: string;
  memo?: string;
  tag?: string;
};
export type AdminEventFormRef = {
  handleSubmit: () => void;
};
const EventPromotionForm = forwardRef<AdminEventFormRef, Props>(
  ({ className, defaultValues, ...props }, ref) => {
    console.log(defaultValues?.startDate);
    const { register, handleSubmit, control, setValue, watch } =
      useForm<AdminEventInputs>({
        mode: "onSubmit",
        defaultValues: defaultValues
          ? {
              ...defaultValues,
              startDate: new Date(defaultValues.startDate)
                .toISOString()
                .split("T")[0],
              endDate: new Date(defaultValues.endDate)
                .toISOString()
                .split("T")[0],
            }
          : {
              urls: [{ value: "", type: "Video" }],
            },
      });
    const { closePopup } = usePopupAction();
    const { fields, append, remove } = useFieldArray({
      control,
      name: "urls",
    });
    const onSubmitHandler = (data: FieldValues) => {
      console.log(data);
      closePopup();
    };
    const onErrorHandler = (data: FieldValues) => {
      console.log(data);
    };

    //시작일 설정시 자동으로 종료일이 설정되도록
    const startDate = watch("startDate");
    useEffect(() => {
      if (startDate) {
        setValue("endDate", startDate);
      }
    }, [startDate, setValue]);

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
        <form
          className="relative flex size-full max-h-[80vh] flex-col gap-6 overflow-auto px-[var(--client-layout-margin)] py-6"
          onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
        >
          <div className="relative flex size-full flex-col gap-3">
            <CommonLabel>URL*</CommonLabel>
            {fields.map((_field, index) => (
              <div
                className="relative flex h-fit w-full flex-row gap-1"
                key={index}
              >
                <CommonInputField
                  placeholder="https://example.com"
                  type="url"
                  className="flex-[2]"
                  id={`url${index}`}
                  {...register(`urls.${index}.value`, {
                    required: "입력이 필요합니다",
                  })}
                />
                <Controller
                  name={`urls.${index}.type`}
                  control={control}
                  rules={{ required: "입력이 필요합니다" }}
                  render={({ field }) => (
                    <CommonDropDown
                      {...field}
                      className="flex-1"
                      optionItems={["Video", "Article", "Podcast", "Link"]}
                    />
                  )}
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-1 text-sm font-semibold text-[var(--highlight-color)]"
                >
                  <CancleIcon className="size-5" />
                </button>
              </div>
            ))}
            <div className="relative flex size-full flex-row justify-end gap-2">
              <button
                onClick={() => append({ value: "", type: "Video" })}
                className="text-sm font-semibold text-[var(--sub-color)]"
              >
                + Add
              </button>
            </div>
          </div>
          <div>
            <CommonLabel htmlFor="eventTitle">Event Title</CommonLabel>
            <CommonInputField
              id="eventTitle"
              {...register("eventTitle", { required: "입력이 필요합니다" })}
            />
          </div>
          <div>
            <CommonLabel htmlFor="eventHost">Event Host</CommonLabel>
            <CommonInputField
              id="eventHost"
              {...register("eventHost", { required: "입력이 필요합니다" })}
            />
          </div>
          <div className="relative flex size-full flex-col">
            <CommonLabel htmlFor="startDate">Date/Duration</CommonLabel>
            <div className="relative flex w-full flex-row items-center justify-center">
              <CommonInputField
                id="startDate"
                type="date"
                className="!px-1"
                {...register("startDate", { required: "입력이 필요합니다" })}
              />
              ~
              <CommonInputField
                id="endDate"
                type="date"
                className="!px-1"
                {...register("endDate", { required: "입력이 필요합니다" })}
              />
            </div>
          </div>
          <div>
            <CommonLabel
              htmlFor="location"
              className="text-[var(--highlight-color)]"
            >
              Location*
            </CommonLabel>
            <Controller
              name={`location`}
              control={control}
              rules={{ required: "입력이 필요합니다" }}
              render={({ field }) => (
                <CommonDropDown
                  {...field}
                  className="flex-1"
                  optionItems={["Online", "Offline", "Online/Offline"]}
                />
              )}
            />
          </div>
          <div>
            <CommonLabel
              htmlFor="eventType"
              className="text-[var(--highlight-color)]"
            >
              Event Type*
            </CommonLabel>
            <CommonInputField id="eventType" {...register("eventType")} />
          </div>
          <div>
            <CommonLabel
              htmlFor="eventFlag"
              className="text-[var(--highlight-color)]"
            >
              Event Flag*
            </CommonLabel>
            <CommonSelectBox
              optionItems={["Solo", "Group", "etc"]}
              className="flex-1"
              {...register(`eventFlag`, { required: "입력이 필요합니다" })}
            />
          </div>
          <div className="relative flex size-full flex-row">
            <CommonLabel
              htmlFor="isPosting"
              className="text-[var(--highlight-color)]"
            >
              Posting on/off*
            </CommonLabel>
            <CommonToggleSwitch
              className="h-5 w-10"
              {...register(`isPosting`, { required: "입력이 필요합니다" })}
            />
          </div>
          <div className="relative flex size-full flex-row border-b-[1px]"></div>
          <div>
            <CommonLabel htmlFor="isbn" className="text-[var(--sub-color)]">
              Book ISBN Number
            </CommonLabel>
            <CommonInputField id="isbn" {...register("isbn")} />
          </div>
          <div>
            <CommonLabel htmlFor="bookName" className="text-[var(--sub-color)]">
              Book Name
            </CommonLabel>
            <CommonInputField id="bookName" {...register("bookName")} />
          </div>
          <div>
            <CommonLabel
              htmlFor="senderName"
              className="text-[var(--sub-color)]"
            >
              Sender Name
            </CommonLabel>
            <CommonInputField id="senderName" {...register("senderName")} />
          </div>
          <div>
            <CommonLabel
              htmlFor="senderEmail"
              className="text-[var(--sub-color)]"
            >
              Sender Email
            </CommonLabel>
            <CommonInputField id="senderEmail" {...register("senderEmail")} />
          </div>
          <div>
            <CommonLabel
              htmlFor="senderMessage"
              className="text-[var(--sub-color)]"
            >
              Sender Message
            </CommonLabel>
            <CommonInputField
              id="senderMessage"
              {...register("senderMessage")}
            />
          </div>
          <div>
            <CommonLabel htmlFor="memo" className="text-[var(--sub-color)]">
              Memo
            </CommonLabel>
            <CommonInputField id="memo" {...register("memo")} />
          </div>
          <div>
            <CommonLabel htmlFor="tag" className="text-[var(--sub-color)]">
              Tag
            </CommonLabel>
            <CommonInputField id="tag" {...register("tag")} />
          </div>
        </form>
      </div>
    );
  }
);

EventPromotionForm.displayName = "EventPromotionForm";
export default EventPromotionForm;
