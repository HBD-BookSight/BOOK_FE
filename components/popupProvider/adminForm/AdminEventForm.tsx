"use client";
import CommonCalendar from "@/components/common/CommonCalendar";
import CommonDropDown from "@/components/common/CommonDropDown";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import CommonSelectBox from "@/components/common/CommonSelectBox";
import CommonToggleSwitch from "@/components/common/CommonToggleSwitch";
import { usePopupAction } from "@/context/popupStore";
import { postEvents } from "@/function/post/admin";
import CancleIcon from "@/public/icons/cancleIcon.svg";
import { EventCreateRequest, EventPostRequest } from "@/types/dto";
import {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useImperativeHandle,
} from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

type Props = {
  className?: string;
  defaultValues?: EventCreateRequest;
} & HTMLAttributes<HTMLDivElement>;

export type AdminEventFormRef = {
  handleSubmit: () => void;
};
const AdminEventForm = forwardRef<AdminEventFormRef, Props>(
  ({ className, defaultValues, ...props }, ref) => {
    const { register, handleSubmit, control, setValue, watch } =
      useForm<EventCreateRequest>({
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
              bookIsbnList: [{ value: 0 }],
              urls: [{ url: "", type: "Link" }],
            },
      });
    const { closePopup } = usePopupAction();

    const { fields, append, remove } = useFieldArray({
      control,
      name: "urls",
    });

    const {
      fields: isbnFields,
      append: appendIsbn,
      remove: removeIsbn,
    } = useFieldArray({
      control,
      name: "bookIsbnList",
    });

    const onSubmitHandler = async (data: EventCreateRequest) => {
      const payload: EventPostRequest = {
        ...data,
        bookIsbnList: data.bookIsbnList?.map((b) => b.value),
      };
      console.log(data);
      const res = await postEvents(payload);
      console.log(res);

      closePopup();
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
          Add Event
        </h2>
        <form
          className="relative flex size-full max-h-[80vh] flex-col gap-6 overflow-auto py-6"
          onSubmit={handleSubmit(onSubmitHandler)}
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
                  type="urls"
                  className="flex-[2]"
                  id={`urls${index}`}
                  {...register(`urls.${index}.url`, {
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
            <div className="relative flex size-full gap-2">
              <button
                type="button"
                onClick={() => append({ url: "", type: "Link" })}
                className="text-sm font-semibold text-[var(--sub-color)]"
              >
                + Add
              </button>
            </div>
          </div>
          <CommonCalendar />
          <div>
            <CommonLabel htmlFor="title">Event Title*</CommonLabel>
            <CommonInputField
              id="title"
              {...register("title", { required: "입력이 필요합니다" })}
            />
          </div>
          <div>
            <CommonLabel htmlFor="host">Event Host*</CommonLabel>
            <CommonInputField
              id="host"
              {...register("host", { required: "입력이 필요합니다" })}
            />
          </div>
          <div className="relative flex size-full flex-col">
            <CommonLabel htmlFor="startDate">Date/Duration*</CommonLabel>
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

          <div className="relative flex size-full flex-col gap-3">
            <CommonLabel htmlFor="isbn" className="text-[var(--sub-color)]">
              Book ISBN Number
            </CommonLabel>
            {isbnFields.map((field, index) => (
              <div
                className="relative flex h-fit w-full flex-row gap-1"
                key={field + String(index)}
              >
                <CommonInputField
                  type="number"
                  id={`isbn${index}`}
                  {...register(`bookIsbnList.${index}.value`, {
                    minLength: {
                      value: 10,
                      message: "10자리 이상 입력해야 합니다",
                    },
                    maxLength: {
                      value: 13,
                      message: "13자리 이하로 입력해야 합니다",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => removeIsbn(index)}
                  className="p-1 text-sm font-semibold text-[var(--highlight-color)]"
                >
                  <CancleIcon className="size-5" />
                </button>
              </div>
            ))}
            <div className="relative flex size-full gap-2">
              <button
                type="button"
                onClick={() => appendIsbn({ value: 0 })}
                className="text-sm font-semibold text-[var(--sub-color)]"
              >
                + Add
              </button>
            </div>
          </div>
          <div>
            <CommonLabel
              htmlFor="bookTitle"
              className="text-[var(--sub-color)]"
            >
              Book Name
            </CommonLabel>
            <CommonInputField id="bookTitle" {...register("bookTitle")} />
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
            <CommonLabel htmlFor="tagList" className="text-[var(--sub-color)]">
              Tag
            </CommonLabel>
            <CommonInputField id="tagList" {...register("tagList")} />
          </div>
        </form>
      </div>
    );
  }
);

AdminEventForm.displayName = "AdminContentForm";
export default AdminEventForm;
