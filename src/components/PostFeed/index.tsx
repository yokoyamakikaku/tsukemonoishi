'use client';

import PostFeedItem from "./PostFeedItem";

import { CommunityPost, PremiumPost } from "@/API";

export default function PostFeed ({
  posts
}: {
  posts: (CommunityPost | PremiumPost)[]
}) {
  return (
    posts.map((post) => (
      <PostFeedItem key={post.id} post={post} />
    ))
  );
}
