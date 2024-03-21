'use client'

import { UseMutationOptions, useMutation, useQuery } from "@tanstack/react-query"
import {
  getCurrentUser,
  fetchUserAttributes,
  signOut,
  signUp,
  signIn,
  confirmSignUp
} from "@aws-amplify/auth"

export function useGetAuthStatusQuery () {
  return useQuery({
    queryKey: ["authStatus"],
    async queryFn () {
      try {
        await getCurrentUser()
        return 'AUTHORIZED'
      } catch {
        return 'NOT_AUTHORIZED'
      }
    }
  })
}

export function useGetProfileQuery () {
  return useQuery({
    queryKey: ["profile"],
    async queryFn () {
      const userAttributes = await fetchUserAttributes()
      const id = userAttributes.sub
      const email = userAttributes.email
      const name = userAttributes.name
      return { id, email, name }
    }
  })
}

export function useSignUpMutation (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof signUp>>,
    Error,
    Parameters<typeof signUp>[0],
    unknown
  >
) {
  return useMutation({
    mutationFn: signUp,
    ...options
  })
}

export function useSignInMutation (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof signIn>>,
    Error,
    Parameters<typeof signIn>[0],
    unknown
  >
) {
  return useMutation({
    mutationFn: signIn,
    ...options
  })
}

export function useConfirmSignUpMutation (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof confirmSignUp>>,
    Error,
    Parameters<typeof confirmSignUp>[0],
    unknown
  >
) {
  return useMutation({
    mutationFn: confirmSignUp,
    ...options
  })
}

export function useSignOutMutation (
  options?: UseMutationOptions<void, Error, void, unknown>
) {
  return useMutation({
    async mutationFn () {
      signOut()
    },
    ...options
  })
}
