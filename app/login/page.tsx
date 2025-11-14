"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function LoginFormWithForm() {
  // react-hook-form 사용(useForm)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    try {
      console.log("로그인 성공:", data);
      alert("로그인 성공!");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>로그인 (useState 버전)</h2>

      <div>
        <input
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다.",
            },
          })}
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white rounded-md p-2"
      >
        {isSubmitting ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
