import { useMutation, useQuery } from "@tanstack/react-query"

import { UseApiMutationOptions, UseApiQueryOptions } from "./types"

import { createAccount, getAccount, listAccounts, updateAccount, deleteAccount } from "@/services/api/account/client"

export function useCreateAccountMutation(
  options?: UseApiMutationOptions<typeof createAccount>
) {
  return useMutation({
    mutationFn: createAccount,
    ...options,
  })
}

export function useGetAccountQuery(id: any, options?: UseApiQueryOptions<typeof getAccount>) {
  return useQuery({
    enabled: !!id,
    queryKey: ['accounts', id],
    async queryFn () { return await getAccount(id as string)},
    ...options,
  })
}

export function useListAccounts(options?: UseApiQueryOptions<typeof listAccounts>) {
  return useQuery({
    queryKey: ['accounts'],
    async queryFn () { return await listAccounts()},
    ...options,
  })
}

export function useUpdateAccountMutation(
  options?: UseApiMutationOptions<typeof updateAccount>
) {
  return useMutation({
    mutationFn: updateAccount,
    ...options,
  })
}

export function useDeleteAccountMutation(
  options?: UseApiMutationOptions<typeof deleteAccount>
) {
  return useMutation({
    mutationFn: deleteAccount,
    ...options,
  })
}
