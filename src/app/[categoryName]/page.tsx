import ViewCategorySummary from "./components/ViewCategorySummary";
import { ViewLatestCategoryPosts } from "./components/ViewLatestCategoryPosts";

import { listPaginatedLatestCommunityPostsByCategoryId } from "@/services/api/communityPost/server";
import { getCategoryByName } from "@/services/api/category/server";

export default async function CategoryPage ({
  params: { categoryName }
}: {
  params: { categoryName: string }
}) {
  const category = await getCategoryByName(categoryName);
  const page = await listPaginatedLatestCommunityPostsByCategoryId(category.id);
  return (
    <>
      <ViewCategorySummary
        category={category} />
      <ViewLatestCategoryPosts
        categoryId={category.id}
        page={page} />
    </>
  );
}
