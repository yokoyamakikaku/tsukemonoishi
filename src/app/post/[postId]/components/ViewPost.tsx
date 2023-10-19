'use client'

import Link from "next/link"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { API, GraphQLResult } from "@aws-amplify/api"

import { Category, CommunityPost, GetCommunityPostQueryVariables } from "@/API"
import DateTimeLabel from "@/components/DateTimeLabel"
import MarkdownRenderer from "@/components/MarkdownRenderer"

const Post = () => {
  const { postId: id } = useParams()

  const query = useQuery({
     queryKey: ['post', id],
     enabled: typeof id === 'string',
     async queryFn () {
      const result = (await API.graphql({
        authMode: 'API_KEY',
        variables: { id } as GetCommunityPostQueryVariables,
        query: /* GraphQL */ `
          query Query($id: ID!) {
            getCommunityPost(id: $id) {
              id
              title
              body
              createdAt
              category {
                title
                name
              }
            }
          }
        ` ,
      })) as GraphQLResult<{
        getCommunityPost: (
          Pick<CommunityPost, 'id' | 'title' | 'body' | 'createdAt'> & {
            category: Pick<Category, 'title' | 'name'>
          }
        )
      }>
      if (result.errors) throw Error(JSON.stringify(result.errors))
      if (!result.data) throw Error("NoData")
      return result.data.getCommunityPost
    },
  })

  return (
    <>
      {query.isLoading && (
        <div>Loading</div>
      )}
      {query.isSuccess && (
        <div className="border-b pb-4 flex flex-col gap-4 px-4">
          <div className="flex flex-col gap-4">
            <div><DateTimeLabel dateTime={query.data.createdAt} /></div>
            <Link href={`/post/${query.data.id}`}  className="text-5xl font-bold hover:underline">{query.data.title}</Link>
            <div><Link className="bg-gray-100 hover:bg-gray-200 rounded text-sm px-2 py-1" href={`/${query.data.category.name}`}>{query.data.category.title}</Link></div>
          </div>
          <MarkdownRenderer markdown={query.data.body} />
        </div>
      )}
    </>
  )
}

export default Post
