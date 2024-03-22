'use client';

import PostFeed from "@/components/PostFeed";
import LoadMoreButton from "@/components/PostFeed/LoadMoreButton";
import { useInfinityListLatestCommunityPostsByCategoryId } from "@/hooks/communityPost";

export default function InfinityCategoryPostFeed ({
  categoryId,
  nextToken,
}: {
  categoryId: string
  nextToken?: string | null
}) {
  const query = useInfinityListLatestCommunityPostsByCategoryId(categoryId, nextToken);
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
  );
}
