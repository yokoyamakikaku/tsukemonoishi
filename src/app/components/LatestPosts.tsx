'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import { API, GraphQLResult } from "@aws-amplify/api"
import { Category, CommunityPost, ListCommunityPostsQueryVariables } from "@/API"
import PostFeed from "./PostFeed"

const LatestPosts = () => {
  const query = useInfiniteQuery({
    queryKey: ['latest'],
    queryFn: async ({ pageParam: nextToken = '' }) => {
      const result = (await API.graphql({
        authMode: 'API_KEY',
        variables: {
          limit: 5,
          nextToken: nextToken == '' ? null : nextToken
        } as ListCommunityPostsQueryVariables,
        query: /* GraphQL */ `
          query Query (
            $filter: ModelCommunityPostFilterInput
            $limit: Int
            $nextToken: String
          ) {
            listCommunityPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
              items {
                id
                title
                body
                createdAt
                category {
                  title
                  name
                }
              }
              nextToken
            }
          }
        `,
      })) as GraphQLResult<{
        listCommunityPosts: {
          items: (
            Pick<CommunityPost, 'id' | "body" | "title" | "createdAt">
            & { category: Pick<Category, 'title' | 'name'> }
          )[]
          nextToken?: string | null
        }
      }>
      if (result.errors) throw Error(JSON.stringify(result.errors))
      if (!result.data) throw Error("NoData")
      return result.data.listCommunityPosts
    },
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.nextToken,
  })

  return <PostFeed query={query} />
}

export default LatestPosts
