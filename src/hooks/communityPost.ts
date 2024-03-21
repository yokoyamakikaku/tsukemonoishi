import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import { UseApiMutationOptions, UseApiQueryOptions } from "./types";

import { createCommunityPost, getCommunityPost, listCommunityPosts, updateCommunityPost, deleteCommunityPost, listPaginatedLatestCommunityPosts, listPaginatedLatestCommunityPostsByCategoryId } from "@/services/api/communityPost/client";

export function useCreateCommunityPostMutation(
  options?: UseApiMutationOptions<typeof createCommunityPost>
) {
  return useMutation({
    mutationFn: createCommunityPost,
    ...options,
  })
}

export function useGetCommunityPostQuery(
  id: any,
  options?: UseApiQueryOptions<typeof getCommunityPost>
) {
  return useQuery({
    enabled: !!id,
    queryKey: ['communityPosts', id],
    async queryFn () { return await getCommunityPost(id as string)},
    ...options,
  })
}

export function useListCommunityPosts(options?: UseApiQueryOptions<typeof listCommunityPosts>) {
  return useQuery({
    queryKey: ['communityPosts'],
    async queryFn () { return await listCommunityPosts()},
    ...options,
  })
}

export function useUpdateCommunityPostMutation(
  options?: UseApiMutationOptions<typeof updateCommunityPost>
) {
  return useMutation({
    mutationFn: updateCommunityPost,
    ...options,
  })
}

export function useDeleteCommunityPostMutation(
  options?: UseApiMutationOptions<typeof deleteCommunityPost>
) {
  return useMutation({
    mutationFn: deleteCommunityPost,
    ...options,
  })
}

export function useInfinityListLatestCommunityPosts (nextToken?: string | null | undefined) {
  return useInfiniteQuery<
    Awaited<ReturnType<typeof listPaginatedLatestCommunityPosts>>,
    Error,
    {
      pages: Awaited<ReturnType<typeof listPaginatedLatestCommunityPosts>>[]
    },
    string[],
    string | null | undefined
  >({
    queryKey: ['latest'],
    initialPageParam: nextToken,
    getNextPageParam (lastPage) {
      return lastPage.nextToken
    },
    async queryFn ({ pageParam: nextToken }) {
      return await listPaginatedLatestCommunityPosts(nextToken)
    }
  })
}

export function useInfinityListLatestCommunityPostsByCategoryId (
  categoryId: string | null | undefined,
  nextToken?: string | null | undefined
) {
  return useInfiniteQuery<
    Awaited<ReturnType<typeof listPaginatedLatestCommunityPostsByCategoryId>>,
    Error,
    {
      pages: Awaited<ReturnType<typeof listPaginatedLatestCommunityPostsByCategoryId>>[]
    },
    string[],
    string | null | undefined
  >({
    enabled: typeof categoryId == 'string',
    queryKey: ['latest', categoryId ?? 'none'],
    initialPageParam: nextToken,
    getNextPageParam (lastPage) {
      return lastPage.nextToken
    },
    async queryFn ({ pageParam: nextToken }) {
      return await listPaginatedLatestCommunityPostsByCategoryId(categoryId as string, nextToken)
    }
  })
}
