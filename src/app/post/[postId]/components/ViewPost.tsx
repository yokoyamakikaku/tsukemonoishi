'use client';

import Link from "next/link";

import DateTimeLabel from "@/components/DateTimeLabel";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useGetCommunityPostQuery } from "@/hooks/communityPost";
import { getCommunityPost } from "@/services/api/communityPost/server";

export default function ViewCommunityPost ({
  post
}: {
  post: Awaited<ReturnType<typeof getCommunityPost>>
}) {
  const query = useGetCommunityPostQuery(post.id, {
    initialData: post
  });

  return (
    <>
      {query.isLoading && (
        <div>Loading</div>
      )}
      {query.isSuccess && (
        <div className="border-b pb-4 flex flex-col gap-4 px-4">
          <div className="flex flex-col gap-4">
            <div><DateTimeLabel dateTime={query.data.createdAt} /></div>
            <Link href={`/post/${query.data.id}`} className="text-5xl font-bold hover:underline">{query.data.title}</Link>
            {query.data.category && (
              <div>
                <Link
                  className="bg-gray-100 hover:bg-gray-200 rounded text-sm px-2 py-1"
                  href={`/${query.data.category.name}`}>
                  {query.data.category.title}
                </Link>
              </div>
            )}
          </div>
          <MarkdownRenderer markdown={query.data.body} />
        </div>
      )}
    </>
  );
}
