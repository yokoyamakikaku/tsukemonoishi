import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries'
import { CreateAccountInput, DeleteAccountInput, ListAccountsQuery, UpdateAccountInput } from '@/API'
import { ApiClient } from '../types'

export function createAccountWithClient (client: ApiClient) {
  return async function createAccount (input: CreateAccountInput) {
    const result = await client.graphql({
      query: mutations.createAccount,
      variables: { input }
    })

    if (result.errors) throw new Error(result.errors[0].message)
    return result.data.createAccount
  }
}

export function getAccountWithClient (client: ApiClient) {
  return async function getAccount (id: string) {
    const result = await client.graphql({
      query: queries.getAccount,
      variables: { id }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    if (!result.data.getAccount) throw new Error('NotFound')
    return result.data.getAccount
  }
}

export function listAccountsWithClient (client: ApiClient) {
  return async function listAccounts (nextToken?: string | null | undefined): Promise<NonNullable<ListAccountsQuery['listAccounts']>['items'][number][]> {
    const result = await client.graphql({
      query: queries.listAccounts,
      variables: { nextToken }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    if (!result.data.listAccounts) throw new Error('NotFound')
    if (!result.data.listAccounts.nextToken) return result.data.listAccounts.items
    return [
      ...result.data.listAccounts.items,
      ...(await listAccounts(result.data.listAccounts.nextToken))
    ]
  }
}

export function updateAccountWithClient (client: ApiClient) {
  return async function updateAccount (input: UpdateAccountInput) {
    const result = await client.graphql({
      query: mutations.updateAccount,
      variables: { input }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    return result.data.updateAccount
  }
}

export function deleteAccountWithClient (client: ApiClient) {
  return async function deleteAccount (input: DeleteAccountInput) {
    const result = await client.graphql({
      query: mutations.deleteAccount,
      variables: { input }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    return result.data.deleteAccount
  }
}
