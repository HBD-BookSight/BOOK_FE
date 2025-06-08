"use client";
import CommonDropDown from "@/components/common/CommonDropDown";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import { usePopupAction } from "@/context/popupStore";
import { postPublisher } from "@/function/post/admin";
import CancleIcon from "@/public/icons/cancleIcon.svg";
import { PublisherCreateRequest, PublisherPostRequest } from "@/types/dto";
import { useRouter } from "next/navigation";
import { forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

type Props = {
  className?: string;
  defaultValues?: PublisherCreateRequest;
} & HTMLAttributes<HTMLDivElement>;

export type AdminPublisherFormRef = {
  handleSubmit: () => void;
};
const AdminPublisherForm = forwardRef<AdminPublisherFormRef, Props>(
  ({ className, defaultValues, ...props }, ref) => {
    const router = useRouter();
    const { register, handleSubmit, control } = useForm<PublisherCreateRequest>(
      {
        mode: "onSubmit",
        defaultValues: defaultValues || {
          urls: [{ url: "", type: "Link" }],
          bookIsbnList: [{ value: 0 }],
        },
      }
    );
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

    const onSubmitHandler = async (data: PublisherCreateRequest) => {
      const payload: PublisherPostRequest = {
        ...data,
        bookIsbnList: data.bookIsbnList?.map((b) => b.value),
        tagList: data.tagList
          ? data.tagList.split(",").map((tag) => tag.trim())
          : [],
      };
      await postPublisher(payload);
      router.refresh();
      closePopup();
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
          Add Publisher
        </h2>
        <form
          className="relative flex size-full max-h-[80vh] flex-col gap-6 overflow-auto py-6"
          onSubmit={handleSubmit(onSubmitHandler)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const tagName = (e.target as HTMLElement).tagName;
              if (tagName === "INPUT" || tagName === "TEXTAREA") {
                e.preventDefault();
              }
            }
          }}
        >
          <div>
            <CommonLabel
              htmlFor="name"
              className="text-[var(--highlight-color)]"
            >
              Publisher Name*
            </CommonLabel>
            <CommonInputField
              id="name"
              {...register("name", { required: "입력이 필요합니다" })}
            />
          </div>
          <div>
            <CommonLabel
              htmlFor="engName"
              className="text-[var(--highlight-color)]"
            >
              Instagram Id*
            </CommonLabel>
            <CommonInputField id="engName" {...register("engName")} />
          </div>
          <div>
            <CommonLabel
              htmlFor="logo"
              className="text-[var(--highlight-color)]"
            >
              Logo link*
            </CommonLabel>
            <CommonInputField
              id="logo"
              {...register("logo", { required: "입력이 필요합니다" })}
            />
          </div>
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
                  {...register(`urls.${index}.url`)}
                />
                <Controller
                  name={`urls.${index}.type`}
                  control={control}
                  render={({ field }) => (
                    <CommonDropDown
                      {...field}
                      className="flex-1"
                      optionItems={[
                        "Link",
                        "Youtube",
                        "Profile",
                        "Homepage",
                        "Blog",
                      ]}
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
          <div className="relative flex size-full flex-col gap-3">
            <CommonLabel
              htmlFor="isbn"
              className="text-[var(--highlight-color)]"
            >
              Book ISBN Number*
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

AdminPublisherForm.displayName = "AdminPublisherForm";
export default AdminPublisherForm;
