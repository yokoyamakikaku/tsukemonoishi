'use client'

import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { Auth } from "@aws-amplify/auth"
import SignupForm from "./SignupForm"
import ConfirmSignupForm from "./ConfirmSignupForm"

const Signup = () => {
  const router = useRouter()

  const signupMutation = useMutation({
    async mutationFn ({ email, password }: { email: string, password: string }) {
      return await Auth.signUp({
        username: email,
        password: password
      })
    }
  })

  const confirmSignupMutation = useMutation({
    async mutationFn ({ code }: { code: string }) {
      const user = signupMutation.data?.user
      if (!user) throw Error("NoUser")
      const result = await Auth.confirmSignUp(user.getUsername(), code)
      return  result
    },
    onSuccess () {
      router.replace('/user')
    }
  })

  if (!signupMutation.isSuccess) return <SignupForm mutation={signupMutation} />

  return <ConfirmSignupForm mutation={confirmSignupMutation} />
}


export default Signup
