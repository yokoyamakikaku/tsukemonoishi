import { ViewLatestCommunityPosts } from "./components/ViewLatestCommunityPosts"

import { listPaginatedLatestCommunityPosts } from "@/services/api/communityPost/server"

export default async function HomePage () {
  const page = await listPaginatedLatestCommunityPosts()
  return (
    <ViewLatestCommunityPosts page={page} />
  )
}
