import { serverClient as client } from "../server";

import {
  createCommunityPostWithClient,
  deleteCommunityPostWithClient,
  getCommunityPostWithClient,
  listCommunityPostsWithClient,
  listPaginatedLatestCommunityPostsByCategoryIdWithClient,
  listPaginatedLatestCommunityPostsWithClient,
  updateCommunityPostWithClient
} from ".";

import { CreateCommunityPostInput, DeleteCommunityPostInput, UpdateCommunityPostInput } from "@/API";

export async function createCommunityPost(input: CreateCommunityPostInput) {
  return await createCommunityPostWithClient(client)(input)
}

export async function getCommunityPost(id: string) {
  return await getCommunityPostWithClient(client)(id)
}

export async function listCommunityPosts(nextToken?: string | null | undefined) {
  return await listCommunityPostsWithClient(client)(nextToken)
}

export async function listPaginatedLatestCommunityPosts(nextToken?: string | null | undefined) {
  return await listPaginatedLatestCommunityPostsWithClient(client)(nextToken)
}

export async function listPaginatedLatestCommunityPostsByCategoryId(categoryId: string, nextToken?: string | null | undefined) {
  return await listPaginatedLatestCommunityPostsByCategoryIdWithClient(client)(categoryId, nextToken)
}

export async function updateCommunityPost(input: UpdateCommunityPostInput) {
  return await updateCommunityPostWithClient(client)(input)
}

export async function deleteCommunityPost(input: DeleteCommunityPostInput) {
  return await deleteCommunityPostWithClient(client)(input)
}
