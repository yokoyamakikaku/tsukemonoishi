import { serverClient as client } from "../server"

import {
  createPremiumPostWithClient,
  deletePremiumPostWithClient,
  getPremiumPostWithClient,
  listPremiumPostsWithClient,
  updatePremiumPostWithClient
} from "."

import { CreatePremiumPostInput, DeletePremiumPostInput, UpdatePremiumPostInput } from "@/API"

export async function createPremiumPost(input: CreatePremiumPostInput) {
  return await createPremiumPostWithClient(client)(input)
}

export async function getPremiumPost(id: string) {
  return await getPremiumPostWithClient(client)(id)
}

export async function listPremiumPosts(nextToken?: string | null | undefined) {
  return await listPremiumPostsWithClient(client)(nextToken)
}

export async function updatePremiumPost(input: UpdatePremiumPostInput) {
  return await updatePremiumPostWithClient(client)(input)
}

export async function deletePremiumPost(input: DeletePremiumPostInput) {
  return await deletePremiumPostWithClient(client)(input)
}
