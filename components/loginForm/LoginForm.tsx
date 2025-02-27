"use client";
import { useForm } from "react-hook-form";
import CommonInputField from "../common/CommonInputField";

const LoginForm = () => {
  const { register } = useForm();
  return (
    <div className="flex size-fit items-center justify-center rounded-lg border">
      <span className="relative flex size-full flex-row items-end">
        <h2 className="text-2xl font-bold">HBD</h2>
        <h3>Admin</h3>
      </span>
      <form {...register}>
        <CommonInputField placeholder="ㅁㄴㅇㄹ" />
      </form>
    </div>
  );
};

export default LoginForm;
