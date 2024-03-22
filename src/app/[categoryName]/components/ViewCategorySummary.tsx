'use client';

import { Category } from "@/API";
import { useGetCategoryQuery } from "@/hooks/category";

export default function CategoryHead ({
  category
}:{
  category: Category
}) {
  const query = useGetCategoryQuery(category.id, {
    initialData: category,
  });

  return (
    <div className="py-20 px-4 flex flex-col gap-4">
      <h1 className="text-4xl">{query.data?.title}</h1>
      <p className="text-xl">{query.data?.description}</p>
    </div>
  );
}
