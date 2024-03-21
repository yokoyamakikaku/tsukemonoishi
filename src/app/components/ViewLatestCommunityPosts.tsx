import PostFeed from "../../components/PostFeed"

import InfinityPostFeed from "./InfinityPostFeed"

import { listPaginatedLatestCommunityPosts } from "@/services/api/communityPost/client"

export function ViewLatestCommunityPosts ({
  page,
}: {
  page: Awaited<ReturnType<typeof listPaginatedLatestCommunityPosts>>
}) {
  return (
    <>
      <PostFeed
        posts={page.items} />
      <InfinityPostFeed
        nextToken={page.nextToken} />
    </>
  )
}
