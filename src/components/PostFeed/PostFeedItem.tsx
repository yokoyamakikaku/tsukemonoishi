import Link from "next/link";

import { CommunityPost, PremiumPost } from "@/API";
import DateTimeLabel from "@/components/DateTimeLabel";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function PostFeedItem ({
  post
}: {
  post: CommunityPost | PremiumPost
}) {
  return (
    <div className="border-b pb-4 flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4">
        <div><DateTimeLabel dateTime={post.createdAt} /></div>
        <Link href={`/post/${post.id}`} className="text-5xl font-bold hover:underline">{post.title}</Link>
        {post.category && (
          <div>
            <Link className="bg-gray-100 hover:bg-gray-200 rounded text-sm px-2 py-1" href={`/${post.category.name}`}>
              {post.category.title}
            </Link>
          </div>
        )}
      </div>
      <MarkdownRenderer markdown={post.body} />
    </div>
  );
}
