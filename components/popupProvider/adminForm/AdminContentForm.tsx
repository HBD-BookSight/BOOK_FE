"use client";
import CommonInputField from "@/components/common/CommonInputField";
import CommonLabel from "@/components/common/CommonLabel";
import CommonSelectBox from "@/components/common/CommonSelectBox";
import { usePopupActon } from "@/context/popupStore";
import { forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import CancleIcon from "@/components/icons/cancleIcon.svg";
import { useRouter } from "next/navigation";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
export type AdminContentInputs = {
  urls: { value: string; type: string }[];
  isbn: number;
  contentTitle?: string;
  bookName?: string;
  memo?: string;
  tag?: string;
};
export type AdminContentFormRef = {
  handleSubmit: () => void;
};
const AdminContentForm = forwardRef<AdminContentFormRef, Props>(({ className, ...props }, ref) => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<AdminContentInputs>({
    mode: "onSubmit",
    defaultValues: {
      urls: [{ value: "", type: "Video" }],
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
    <div className={`relative flex size-full flex-col ${className || ""}`} {...props}>
      <h2 className="flex justify-center text-sm font-semibold text-[var(--sub-color)]">Add Content</h2>
      <form
        className="relative flex size-full flex-col gap-6 py-6"
        onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
      >
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
                optionItems={["Video", "Article", "Podcast", "Link"]}
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
          <CommonLabel htmlFor="isbn" className="text-[var(--highlight-color)]">
            Book ISBN Number*
          </CommonLabel>
          <CommonInputField
            id="isbn"
            {...register("isbn", {
              required: "반드시 입력해야 합니다",
              minLength: { value: 10, message: "10자리 이상 입력해야 합니다" },
              maxLength: { value: 13, message: "13자리 이하로 입력해야 합니다" },
            })}
            type="number"
          />
        </div>
        <div>
          <CommonLabel htmlFor="contentTitle" className="text-[var(--sub-color)]">
            Content Title
          </CommonLabel>
          <CommonInputField id="contentTitle" {...register("contentTitle")} />
        </div>
        <div>
          <CommonLabel htmlFor="bookName" className="text-[var(--sub-color)]">
            Book Name
          </CommonLabel>
          <CommonInputField id="bookName" {...register("bookName")} />
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
});

AdminContentForm.displayName = "AdminContentForm";
export default AdminContentForm;
