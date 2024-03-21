import { useMutation, useQuery } from "@tanstack/react-query";

import { UseApiMutationOptions, UseApiQueryOptions } from "./types";

import { createCategory, getCategory, listCategories, updateCategory, deleteCategory } from "@/services/api/category/client";

export function useCreateCategoryMutation(
  options?: UseApiMutationOptions<typeof createCategory>
) {
  return useMutation({
    mutationFn: createCategory,
    ...options,
  })
}

export function useGetCategoryQuery(
  id: any,
  options?: UseApiQueryOptions<typeof getCategory>
) {
  return useQuery({
    enabled: !!id,
    queryKey: ['categories', id],
    async queryFn () { return await getCategory(id as string)},
    ...options,
  })
}

export function useListCategories(options?: UseApiQueryOptions<typeof listCategories>) {
  return useQuery({
    queryKey: ['categories'],
    async queryFn () { return await listCategories()},
    ...options,
  })
}

export function useUpdateCategoryMutation(
  options?: UseApiMutationOptions<typeof updateCategory>
) {
  return useMutation({
    mutationFn: updateCategory,
    ...options,
  })
}

export function useDeleteCategoryMutation(
  options?: UseApiMutationOptions<typeof deleteCategory>
) {
  return useMutation({
    mutationFn: deleteCategory,
    ...options,
  })
}
