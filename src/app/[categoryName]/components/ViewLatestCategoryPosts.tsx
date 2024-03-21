import InfinityCategoryPostFeed from "./InfinityCategoryPostFeed"

import PostFeed from "@/components/PostFeed"
import { listPaginatedLatestCommunityPostsByCategoryId } from "@/services/api/communityPost/server"

export function ViewLatestCategoryPosts ({
  categoryId,
  page,
}: {
  categoryId: string
  page: Awaited<ReturnType<typeof listPaginatedLatestCommunityPostsByCategoryId>>
}) {
  return (
    <>
      <PostFeed
        posts={page.items} />
      <InfinityCategoryPostFeed
        categoryId={categoryId}
        nextToken={page.nextToken} />
    </>
  )
}
