'use client'

import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { useSignInMutation } from "@/hooks/auth"
import Button from "@/components/Button"

type FormValues = {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const { register, handleSubmit, control } = useForm<FormValues>()

  const mutation = useSignInMutation()

  return (
    <form
      className="max-w-lg flex flex-col gap-6 p-4"
      onSubmit={handleSubmit(values => mutation.mutate({
        username: values.email,
        password: values.password
      }))}>
      <div>
        <h1 className="text-xl">ログイン</h1>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="login-email">メールアドレス</label>
        <input
          id="login-email"
          className="border p-2"
          required
          type="email"
          {...register('email')} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="login-password">パスワード</label>
        <input
          id="login-password"
          className="border p-2"
          required
          type="password"
          {...register('password')} />
      </div>
      {mutation.isError && (
        <div className="p-2 bg-red-100">{JSON.stringify(mutation.error, null, 2)}</div>
      )}
      <div className="flex gap-2">
        <Button type="submit">ログイン</Button>
        <Link className="underline py-2 px-3 hover:bg-gray-100 rounded" href="/signup">アカウントの作成</Link>
      </div>
    </form>
  )
}

export default Login
