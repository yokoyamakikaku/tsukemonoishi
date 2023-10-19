'use client'

import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { API, GraphQLResult } from "@aws-amplify/api"
import { Category, CommunityPost, ListCategoriesByNameQuery, ListCategoriesByNameQueryVariables, ListCommunityPostsByCategoryIdWithCreatedAtQueryVariables, ListCommunityPostsQueryVariables } from "@/API"
import PostFeed from "@/app/components/PostFeed"
import { useParams } from "next/navigation"

const CategoryPosts = () => {
  const { categoryName } = useParams()

  const query = useQuery({
    queryKey: ['categoryId', categoryName],
    async queryFn () {
      const result = (await API.graphql({
        authMode: 'API_KEY',
        variables: {
          name: categoryName as string,
          limit: 1
        } as ListCategoriesByNameQueryVariables,
        query: /* GraphQL */ `
          query Query(
            $name: String!
            $sortDirection: ModelSortDirection
            $filter: ModelCategoryFilterInput
            $limit: Int
            $nextToken: String
          ) {
            listCategoriesByName(
              name: $name
              sortDirection: $sortDirection
              filter: $filter
              limit: $limit
              nextToken: $nextToken
            ) {
              items {
                id
              }
            }
          }
        `,
      })) as GraphQLResult<{
        listCategoriesByName: {
          items: (
            Pick<Category, 'id'>
          )[]
        }
      }>
      if (result.errors) throw Error(JSON.stringify(result.errors))
      if (!result.data) throw Error("NoData")
      return result.data.listCategoriesByName.items[0].id
    },
    enabled: typeof categoryName == 'string'
  })

  const categoryId = query.data
  console.log({categoryId})

  const postQuery = useInfiniteQuery({
    queryKey: ['latest'],
    queryFn: async ({ pageParam: nextToken = '' }) => {
      const result = (await API.graphql({
        authMode: 'API_KEY',
        variables: {
          categoryId: categoryId as string,
          limit: 5,
          nextToken: nextToken == '' ? null : nextToken
        } as ListCommunityPostsByCategoryIdWithCreatedAtQueryVariables,
        query: /* GraphQL */ `
          query Query(
            $categoryId: ID!
            $createdAt: ModelStringKeyConditionInput
            $sortDirection: ModelSortDirection
            $filter: ModelCommunityPostFilterInput
            $limit: Int
            $nextToken: String
          ) {
            listCommunityPostsByCategoryIdWithCreatedAt(
              categoryId: $categoryId
              createdAt: $createdAt
              sortDirection: $sortDirection
              filter: $filter
              limit: $limit
              nextToken: $nextToken
            ) {
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
              __typename
            }
          }
        `,
      })) as GraphQLResult<{
        listCommunityPostsByCategoryIdWithCreatedAt: {
          items: (
            Pick<CommunityPost, 'id' | "body" | "title" | "createdAt">
            & { category: Pick<Category, 'title' | 'name'> }
          )[]
          nextToken?: string | null
        }
      }>
      if (result.errors) throw Error(JSON.stringify(result.errors))
      if (!result.data) throw Error("NoData")
      return result.data.listCommunityPostsByCategoryIdWithCreatedAt
    },
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.nextToken,
    enabled: typeof categoryId == 'string'
  })

  return <PostFeed query={postQuery} />
}

export default CategoryPosts
