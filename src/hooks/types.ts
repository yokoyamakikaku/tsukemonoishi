import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query"

export type UseApiMutationOptions <T extends (...args: any) => Promise<any>> = UseMutationOptions<
  Awaited<ReturnType<T>>,
  Error,
  Parameters<T>[0]
>
export type UseApiQueryOptions <T extends (...args: any) => Promise<any>> = Partial<
  UseQueryOptions<Awaited<ReturnType<T>>>
>
