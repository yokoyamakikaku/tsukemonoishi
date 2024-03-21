import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries'
import { CreatePremiumPostInput, DeletePremiumPostInput, ListPremiumPostsQuery, UpdatePremiumPostInput } from '@/API'
import { ApiClient } from '../types'

export function createPremiumPostWithClient (client: ApiClient) {
  return async function createPremiumPost (input: CreatePremiumPostInput) {
    const result = await client.graphql({
      query: mutations.createPremiumPost,
      variables: { input }
    })

    if (result.errors) throw new Error(result.errors[0].message)
    return result.data.createPremiumPost
  }
}

export function getPremiumPostWithClient (client: ApiClient) {
  return async function getPremiumPost (id: string) {
    const result = await client.graphql({
      query: queries.getPremiumPost,
      variables: { id }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    if (!result.data.getPremiumPost) throw new Error('NotFound')
    return result.data.getPremiumPost
  }
}

export function listPremiumPostsWithClient (client: ApiClient) {
  return async function listPremiumPosts (nextToken?: string | null | undefined): Promise<NonNullable<ListPremiumPostsQuery['listPremiumPosts']>['items'][number][]> {
    const result = await client.graphql({
      query: queries.listPremiumPosts,
      variables: { nextToken }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    if (!result.data.listPremiumPosts) throw new Error('NotFound')
    if (!result.data.listPremiumPosts.nextToken) return result.data.listPremiumPosts.items
    return [
      ...result.data.listPremiumPosts.items,
      ...(await listPremiumPosts(result.data.listPremiumPosts.nextToken))
    ]
  }
}

export function updatePremiumPostWithClient (client: ApiClient) {
  return async function updatePremiumPost (input: UpdatePremiumPostInput) {
    const result = await client.graphql({
      query: mutations.updatePremiumPost,
      variables: { input }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    return result.data.updatePremiumPost
  }
}

export function deletePremiumPostWithClient (client: ApiClient) {
  return async function deletePremiumPost (input: DeletePremiumPostInput) {
    const result = await client.graphql({
      query: mutations.deletePremiumPost,
      variables: { input }
    })
    if (result.errors) throw new Error(result.errors[0].message)
    return result.data.deletePremiumPost
  }
}
