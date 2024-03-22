'use client';

import { UseMutationResult } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { confirmSignUp } from "aws-amplify/auth";

import Button from "@/components/Button";

type FormValues = {
  code: string
}

interface ConfirmSignupFormProps {
  username?: string,
  mutation: UseMutationResult<
    Awaited<ReturnType<typeof confirmSignUp>>,
    Error,
    Parameters<typeof confirmSignUp>[0]
  >
}

const ConfirmSignupForm:FC<ConfirmSignupFormProps> = ({
  username,
  mutation
}) => {
  const { register, handleSubmit } = useForm<FormValues>();

  if (typeof username != 'string') {
    return (
      <div>
        <h1>ユーザー名が見つかりません</h1>
      </div>
    );
  }

  return (
    <form
      className="max-w-lg flex flex-col gap-6 p-4"
      onSubmit={handleSubmit(values => {
        mutation.mutate({
          username,
          confirmationCode: values.code
        });
      })}>
      <div>
        <h1 className="text-xl">アカウントの確認</h1>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Authenticate-email">確認コード</label>
        <input
          id="Authenticate-email"
          className="border p-2"
          required
          type="text"
          {...register('code')} />
      </div>
      {mutation.isError && (
        <div className="p-2 bg-red-100">{JSON.stringify(mutation.error, null, 2)}</div>
      )}
      <div className="flex gap-2">
        <Button type="submit">確認する</Button>
      </div>
    </form>
  );
};

export default ConfirmSignupForm;
