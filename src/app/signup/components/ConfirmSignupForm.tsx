'use client'

import { UseMutationResult } from "@tanstack/react-query"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { FC } from "react"

type FormValues = {
  code: string
}

interface ConfirmSignupFormProps {
  mutation: UseMutationResult<unknown, unknown, FormValues>
}

const ConfirmSignupForm:FC<ConfirmSignupFormProps> = ({
  mutation
}) => {
  const { register, handleSubmit } = useForm<FormValues>()

  return (
    <form
      className="max-w-lg flex flex-col gap-6 p-4"
      onSubmit={handleSubmit(values => mutation.mutate(values))}>
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
        <button
          type="submit"
          className="bg-black text-white py-2 px-3 rounded">
          確認する
        </button>
      </div>
    </form>
  )
}


export default ConfirmSignupForm
