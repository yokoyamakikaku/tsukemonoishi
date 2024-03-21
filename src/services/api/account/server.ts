import { CreateAccountInput, DeleteAccountInput, UpdateAccountInput } from "@/API";
import { serverClient as client } from "../server";
import {
  createAccountWithClient,
  deleteAccountWithClient,
  getAccountWithClient,
  listAccountsWithClient,
  updateAccountWithClient
} from ".";

export async function createAccount(input: CreateAccountInput) {
  return await createAccountWithClient(client)(input)
}

export async function getAccount(id: string) {
  return await getAccountWithClient(client)(id)
}

export async function listAccounts(nextToken?: string | null | undefined) {
  return await listAccountsWithClient(client)(nextToken)
}

export async function updateAccount(input: UpdateAccountInput) {
  return await updateAccountWithClient(client)(input)
}

export async function deleteAccount(input: DeleteAccountInput) {
  return await deleteAccountWithClient(client)(input)
}
