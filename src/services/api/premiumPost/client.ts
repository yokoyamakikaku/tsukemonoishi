import { generateClient } from "aws-amplify/api"

import {
  createPremiumPostWithClient,
  deletePremiumPostWithClient,
  getPremiumPostWithClient,
  listPremiumPostsWithClient,
  updatePremiumPostWithClient
} from "."

import { CreatePremiumPostInput, DeletePremiumPostInput, UpdatePremiumPostInput } from "@/API"

export async function createPremiumPost(input: CreatePremiumPostInput) {
  const client = generateClient()
  return await createPremiumPostWithClient(client)(input)
}

export async function getPremiumPost(id: string) {
  const client = generateClient()
  return await getPremiumPostWithClient(client)(id)
}

export async function listPremiumPosts(nextToken?: string | null | undefined) {
  const client = generateClient()
  return await listPremiumPostsWithClient(client)(nextToken)
}

export async function updatePremiumPost(input: UpdatePremiumPostInput) {
  const client = generateClient()
  return await updatePremiumPostWithClient(client)(input)
}

export async function deletePremiumPost(input: DeletePremiumPostInput) {
  const client = generateClient()
  return await deletePremiumPostWithClient(client)(input)
}
