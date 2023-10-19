'use client'

import Link from "next/link"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import DateTimeLabel from "@/components/DateTimeLabel"
import { FC } from "react"
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query"
import { Category, CommunityPost } from "@/API"

interface PostFeedProps {
  query: UseInfiniteQueryResult<InfiniteData<{
    items: (Pick<CommunityPost, 'id' | "body" | "title" | "createdAt"> & {
        category: Pick<Category, 'title' | 'name'>;
    })[];
    nextToken?: string | null | undefined;
  }, unknown>, Error>
}

const PostFeed: FC<PostFeedProps> = ({ query }) => {
  return (
    <div className="flex flex-col gap-8">
      {query.isError && (
        <div className="bg-red-50 p-1">Error</div>
      )}
      {query.data?.pages.map(page => (
        page.items?.map(item => (
          <div key={item.id} className="border-b pb-4 flex flex-col gap-4 px-4">
            <div className="flex flex-col gap-4">
              <div><DateTimeLabel dateTime={item.createdAt} /></div>
              <Link href={`/post/${item.id}`}  className="text-5xl font-bold hover:underline">{item.title}</Link>
              <div><Link className="bg-gray-100 hover:bg-gray-200 rounded text-sm px-2 py-1" href={`/${item.category.name}`}>{item.category.title}</Link></div>
            </div>
            <MarkdownRenderer markdown={item.body} />
          </div>
        ))
      ))}
      {query.hasNextPage && (
        <button
          disabled={query.isFetching} onClick={() => query.fetchNextPage()}
          className="p-4 text-lg text-center w-full hover:bg-gray-100 rounded">
          {query.isFetching ? (
            <>読み込み中</>
          ) : (
            <>さらに記事を見る</>
          )}
        </button>
      )}
    </div>
  )
}

export default PostFeed
