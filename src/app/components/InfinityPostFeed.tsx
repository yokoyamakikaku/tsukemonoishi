'use client'

import PostFeed from "@/components/PostFeed"
import LoadMoreButton from "@/components/PostFeed/LoadMoreButton"
import { useInfinityListLatestCommunityPosts } from "@/hooks/communityPost"

export default function InfinityPostFeed ({
  nextToken,
}: {
  nextToken?: string | null
}) {
  const query = useInfinityListLatestCommunityPosts(nextToken)
  return (
    <>
      {query.isSuccess && query.data && (
        query.data.pages.map((page, index) => (
          <PostFeed key={index} posts={page.items} />
        ))
      )}
      {query.hasNextPage && (
        <LoadMoreButton isFetching={query.isFetching} onClick={() => query.fetchNextPage()} />
      )}
    </>
  )
}
