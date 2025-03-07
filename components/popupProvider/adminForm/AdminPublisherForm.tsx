"use client";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import CommonSelectBox from "@/components/common/CommonSelectBox";
import { usePopupActon } from "@/context/popupStore";
import { forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import CancleIcon from "@/components/icons/cancleIcon.svg";

type Props = { className?: string; defaultValues?: AdminPublisherInputs } & HTMLAttributes<HTMLDivElement>;
export type AdminPublisherInputs = {
  publisherName: string;
  instagramId: string;
  urls: { value: string; type: string }[];
  memo: string;
  tag: string;
};
export type AdminPublisherFormRef = {
  handleSubmit: () => void;
};
const AdminPublisherForm = forwardRef<AdminPublisherFormRef, Props>(({ className, defaultValues, ...props }, ref) => {
  const { register, handleSubmit, control } = useForm<AdminPublisherInputs>({
    mode: "onSubmit",
    defaultValues: defaultValues || {
      urls: [{ value: "", type: "Link" }],
    },
  });
  const { closePopup } = usePopupActon();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "urls",
  });
  const onSubmitHandler = (data: FieldValues) => {
    console.log(data);
    closePopup(); //성공시 모달 종료
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
    <div className={`relative flex size-full flex-col ${className || ""}`} {...props}>
      <h2 className="flex justify-center text-sm font-semibold text-[var(--sub-color)]">Add Content</h2>
      <form
        className="relative flex size-full flex-col gap-6 py-6"
        onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
      >
        <div>
          <CommonLabel htmlFor="publisherName" className="text-[var(--highlight-color)]">
            Publisher Name*
          </CommonLabel>
          <CommonInputField id="publisherName" {...register("publisherName", { required: "입력이 필요합니다" })} />
        </div>
        <div>
          <CommonLabel htmlFor="instagramId" className="text-[var(--highlight-color)]">
            Instagram Id*
          </CommonLabel>
          <CommonInputField id="instagramId" {...register("instagramId", { required: "입력이 필요합니다" })} />
        </div>
        <div className="relative flex size-full flex-col gap-3">
          <CommonLabel>URL*</CommonLabel>
          {fields.map((_field, index) => (
            <div className="relative flex h-fit w-full flex-row gap-1" key={index}>
              <CommonInputField
                placeholder="https://example.com"
                type="url"
                className="flex-[2]"
                id={`url${index}`}
                {...register(`urls.${index}.value`, { required: "입력이 필요합니다" })}
              />
              <CommonSelectBox
                optionItems={["Link", "Youtube", "Profile", "Homepage", "Blog"]}
                className="flex-1"
                {...register(`urls.${index}.type`, { required: "입력이 필요합니다" })}
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
              onClick={() => append({ value: "", type: "video" })}
              className="text-sm font-semibold text-[var(--sub-color)]"
            >
              + Add
            </button>
          </div>
        </div>
        {/* <div className="relative flex size-full flex-col gap-3">
          <CommonLabel htmlFor="isbn">Book ISBN Number*</CommonLabel>
          <div className="relative flex h-fit w-full flex-row gap-1">
            <CommonInputField id="isbn" className="flex-[2]" {...register("isbn", { required: "입력이 필요합니다" })} />
            <CommonSelectBox optionItems={["16자", "13자"]} className="flex-1" />
          </div>
        </div> */}
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
});

AdminPublisherForm.displayName = "AdminContentForm";
export default AdminPublisherForm;
