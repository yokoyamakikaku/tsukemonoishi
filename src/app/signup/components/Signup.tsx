'use client'

import { useRouter } from "next/navigation"

import SignupForm from "./SignupForm"
import ConfirmSignupForm from "./ConfirmSignupForm"

import { useConfirmSignUpMutation, useSignUpMutation } from "@/hooks/auth"

const Signup = () => {
  const router = useRouter()

  const signupMutation = useSignUpMutation()
  const confirmSignupMutation = useConfirmSignUpMutation()

  if (!signupMutation.isSuccess) {
    return (
      <SignupForm mutation={signupMutation} />
    )
  }

  return (
    <ConfirmSignupForm
      username={signupMutation.data.userId}
      mutation={confirmSignupMutation} />
  )
}

export default Signup
