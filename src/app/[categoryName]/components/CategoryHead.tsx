'use client'

import { useQuery } from "@tanstack/react-query"
import { API, GraphQLResult } from "@aws-amplify/api"
import { Category, ListCategoriesByNameQueryVariables } from "@/API"
import { useParams } from "next/navigation"

const CategoryHead = () => {
  const { categoryName } = useParams()

  const query = useQuery({
    queryKey: ['categoryByName', categoryName],
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
                title
                description
              }
            }
          }
        `,
      })) as GraphQLResult<{
        listCategoriesByName: {
          items: (
            Pick<Category, 'title' | 'description'>
          )[]
        }
      }>
      if (result.errors) throw Error(JSON.stringify(result.errors))
      if (!result.data) throw Error("NoData")
      return result.data.listCategoriesByName.items[0]
    },
    enabled: typeof categoryName == 'string'
  })

  return (
    <div className="py-20 px-4 flex flex-col gap-4">
      <h1 className="text-4xl">{query.data?.title}</h1>
      <p className="text-xl">{query.data?.description}</p>
    </div>
  )
}

export default CategoryHead
