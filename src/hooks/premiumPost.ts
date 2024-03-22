import { useMutation, useQuery } from "@tanstack/react-query";

import { UseApiMutationOptions, UseApiQueryOptions } from "./types";

import { createPremiumPost, getPremiumPost, listPremiumPosts, updatePremiumPost, deletePremiumPost } from "@/services/api/premiumPost/client";

export function useCreatePremiumPostMutation(
  options?: UseApiMutationOptions<typeof createPremiumPost>
) {
  return useMutation({
    mutationFn: createPremiumPost,
    ...options,
  });
}

export function useGetPremiumPostQuery(id: any, options?: UseApiQueryOptions<typeof getPremiumPost>) {
  return useQuery({
    enabled: !!id,
    queryKey: ['premiumPosts', id],
    async queryFn () { return await getPremiumPost(id as string);},
    ...options,
  });
}

export function useListPremiumPosts(options?: UseApiQueryOptions<typeof listPremiumPosts>) {
  return useQuery({
    queryKey: ['premiumPosts'],
    async queryFn () { return await listPremiumPosts();},
    ...options,
  });
}

export function useUpdatePremiumPostMutation(
  options?: UseApiMutationOptions<typeof updatePremiumPost>
) {
  return useMutation({
    mutationFn: updatePremiumPost,
    ...options,
  });
}

export function useDeletePremiumPostMutation(
  options?: UseApiMutationOptions<typeof deletePremiumPost>
) {
  return useMutation({
    mutationFn: deletePremiumPost,
    ...options,
  });
}
