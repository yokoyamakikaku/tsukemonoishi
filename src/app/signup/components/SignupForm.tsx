'use client'

import { UseMutationResult } from "@tanstack/react-query"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { FC } from "react"
import { signUp } from "aws-amplify/auth"

import Button from "@/components/Button"

type FormValues = {
  email: string
  password: string
}

interface SignupFormProps {
  mutation: UseMutationResult<
    Awaited<ReturnType<typeof signUp>>,
    Error,
    Parameters<typeof signUp>[0]
  >
}

const SignupForm:FC<SignupFormProps> = ({
  mutation
}) => {
  const { register, handleSubmit } = useForm<FormValues>()

  return (
    <form
      className="max-w-lg flex flex-col gap-6 p-4"
      onSubmit={handleSubmit(values => mutation.mutate({
        username: values.email,
        password: values.password
      }))}>
      <div>
        <h1 className="text-xl">アカウントの作成</h1>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="signup-email">メールアドレス</label>
        <input
          id="signup-email"
          className="border p-2"
          required
          type="email"
          {...register('email')} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="signup-password">パスワード</label>
        <input
          id="signup-password"
          className="border p-2"
          required
          type="password"
          {...register('password')} />
      </div>
      {mutation.isError && (
        <div className="p-2 bg-red-100">{JSON.stringify(mutation.error, null, 2)}</div>
      )}
      <div className="flex gap-2">
        <Button type="submit">アカウントを作成する</Button>
        <Link className="underline py-2 px-3 hover:bg-gray-100 rounded" href="/login">ログイン</Link>
      </div>
    </form>
  )
}

export default SignupForm
