import { generateClient } from "aws-amplify/api";

import {
  createAccountWithClient,
  deleteAccountWithClient,
  getAccountWithClient,
  listAccountsWithClient,
  updateAccountWithClient
} from ".";

import { CreateAccountInput, DeleteAccountInput, UpdateAccountInput } from "@/API";

export async function createAccount(input: CreateAccountInput) {
  const client = generateClient()
  return await createAccountWithClient(client)(input)
}

export async function getAccount(id: string) {
  const client = generateClient()
  return await getAccountWithClient(client)(id)
}

export async function listAccounts(nextToken?: string | null | undefined) {
  const client = generateClient()
  return await listAccountsWithClient(client)(nextToken)
}

export async function updateAccount(input: UpdateAccountInput) {
  const client = generateClient()
  return await updateAccountWithClient(client)(input)
}

export async function deleteAccount(input: DeleteAccountInput) {
  const client = generateClient()
  return await deleteAccountWithClient(client)(input)
}
