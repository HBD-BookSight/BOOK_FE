"use client";
import { useForm } from "react-hook-form";
import CommonInputField from "../common/CommonInputField";
import { HTMLAttributes } from "react";
import CommonInputFieldLabel from "../common/CommonInputFieldLabel";
import { useRouter } from "next/navigation";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
type Inputs = { email: string; password: string };
const LoginForm = ({ className, ...props }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmitHandler = (data: unknown) => {
    console.log(data);
    router.push("/admin");
  };
  const onErrorHandler = (errors: unknown) => {
    if (typeof errors === "object" && errors !== null) {
      Object.values(errors).forEach((error) => {
        if (typeof error === "object" && error !== null && "message" in error) {
          alert((error as { message: string }).message);
        }
      });
    }
  };

  return (
    <section
      className={`flex h-fit w-full max-w-[450px] flex-col items-center justify-center rounded-xl border p-10 ${
        className || ""
      }`}
      {...props}
    >
      <span className="relative mb-9 flex size-full flex-row items-end">
        <h2 className="text-2xl font-bold">HBD</h2>
        <h3 className="text-sm font-bold text-[var(--sub-color)]">Admin</h3>
      </span>
      <form className="relative flex size-full flex-col gap-6" onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
        <div className="relative flex size-full flex-col gap-3">
          <CommonInputFieldLabel htmlFor="email">E-mail</CommonInputFieldLabel>
          <CommonInputField
            placeholder="이메일을 입력하세요"
            type="email"
            id="email"
            {...register("email", { required: "이메일을 입력해주세요" })}
          />
        </div>
        <div className="relative flex size-full flex-col gap-3">
          <CommonInputFieldLabel htmlFor="password">Password</CommonInputFieldLabel>
          <CommonInputField
            placeholder="비밀번호를 입력하세요"
            type="password"
            id="password"
            {...register("password", { required: "비밀번호를 입력해주세요" })}
          />
        </div>
        <button className="relative ml-auto flex w-fit items-center justify-center rounded-full border bg-[var(--highlight-color)] px-6 py-3">
          <span className="text-sm font-semibold text-white">Login</span>
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
