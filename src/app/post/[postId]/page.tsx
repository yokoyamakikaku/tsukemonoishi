import ViewPost from "./components/ViewPost"

import { getCommunityPost } from "@/services/api/communityPost/server"

export default async function PostPage ({
  params: {
    postId
  }
}: {
  params: {
    postId: string
  }
}) {
  const post = await getCommunityPost(postId)
  return (
    <ViewPost post={post} />
  )
}
