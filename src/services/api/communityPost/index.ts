import { ApiClient } from '../types';

import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import { CreateCommunityPostInput, DeleteCommunityPostInput, ListCommunityPostsQuery, UpdateCommunityPostInput } from '@/API';

export function createCommunityPostWithClient (client: ApiClient) {
  return async function createCommunityPost (input: CreateCommunityPostInput) {
    const result = await client.graphql({
      query: mutations.createCommunityPost,
      variables: { input }
    });

    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.createCommunityPost;
  };
}

export function getCommunityPostWithClient (client: ApiClient) {
  return async function getCommunityPost (id: string) {
    const result = await client.graphql({
      query: queries.getCommunityPost,
      variables: { id },
      authMode: 'apiKey'
    });
    if (result.errors) throw new Error(result.errors[0].message);
    if (!result.data.getCommunityPost) throw new Error('NotFound');
    return result.data.getCommunityPost;
  };
}

export function listCommunityPostsWithClient (client: ApiClient) {
  return async function listCommunityPosts (nextToken?: string | null | undefined): Promise<NonNullable<ListCommunityPostsQuery['listCommunityPosts']>['items'][number][]> {
    const result = await client.graphql({
      query: queries.listCommunityPosts,
      variables: { nextToken },
      authMode: 'apiKey'
    });
    if (result.errors) throw new Error(result.errors[0].message);
    if (!result.data.listCommunityPosts) throw new Error('NotFound');
    if (!result.data.listCommunityPosts.nextToken) return result.data.listCommunityPosts.items;
    return [
      ...result.data.listCommunityPosts.items,
      ...(await listCommunityPosts(result.data.listCommunityPosts.nextToken))
    ];
  };
}

export function listPaginatedLatestCommunityPostsWithClient (client: ApiClient) {
  return async function listPaginatedLatestCommunityPosts(nextToken?: string | null | undefined) {
    const result = await client.graphql({
      query: queries.listCommunityPosts,
      variables: {
        nextToken,
        limit: 1
      },
      authMode: 'apiKey'
    });
    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.listCommunityPosts;
  };
}

export function listPaginatedLatestCommunityPostsByCategoryIdWithClient (client: ApiClient) {
  return async function listPaginatedLatestCommunityPostsByCategoryId (categoryId: string, nextToken?: string | null | undefined) {
    const result = await client.graphql({
      query: queries.listCommunityPostsByCategoryIdWithCreatedAt,
      variables: {
        categoryId,
        nextToken,
        limit: 1
      },
      authMode: 'apiKey',
    });
    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.listCommunityPostsByCategoryIdWithCreatedAt;
  };
}

export function updateCommunityPostWithClient (client: ApiClient) {
  return async function updateCommunityPost (input: UpdateCommunityPostInput) {
    const result = await client.graphql({
      query: mutations.updateCommunityPost,
      variables: { input }
    });
    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.updateCommunityPost;
  };
}

export function deleteCommunityPostWithClient (client: ApiClient) {
  return async function deleteCommunityPost (input: DeleteCommunityPostInput) {
    const result = await client.graphql({
      query: mutations.deleteCommunityPost,
      variables: { input }
    });
    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.deleteCommunityPost;
  };
}
