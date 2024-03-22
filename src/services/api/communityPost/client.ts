import { generateClient } from "aws-amplify/api";

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
  const client = generateClient();
  return await createCommunityPostWithClient(client)(input);
}

export async function getCommunityPost(id: string) {
  const client = generateClient();
  return await getCommunityPostWithClient(client)(id);
}

export async function listCommunityPosts(nextToken?: string | null | undefined) {
  const client = generateClient();
  return await listCommunityPostsWithClient(client)(nextToken);
}

export async function listPaginatedLatestCommunityPosts(nextToken?: string | null | undefined) {
  const client = generateClient();
  return await listPaginatedLatestCommunityPostsWithClient(client)(nextToken);
}

export async function listPaginatedLatestCommunityPostsByCategoryId(categoryId: string, nextToken?: string | null | undefined) {
  const client = generateClient();
  return await listPaginatedLatestCommunityPostsByCategoryIdWithClient(client)(categoryId, nextToken);
}

export async function updateCommunityPost(input: UpdateCommunityPostInput) {
  const client = generateClient();
  return await updateCommunityPostWithClient(client)(input);
}

export async function deleteCommunityPost(input: DeleteCommunityPostInput) {
  const client = generateClient();
  return await deleteCommunityPostWithClient(client)(input);
}
