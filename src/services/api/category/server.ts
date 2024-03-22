import { serverClient as client } from "../server";

import {
  createCategoryWithClient,
  deleteCategoryWithClient,
  getCategoryByNameWithClient,
  getCategoryWithClient,
  listCategoriesWithClient,
  updateCategoryWithClient
} from ".";

import { CreateCategoryInput, DeleteCategoryInput, UpdateCategoryInput } from "@/API";

export async function createCategory(input: CreateCategoryInput) {
  return await createCategoryWithClient(client)(input);
}

export async function getCategory(id: string) {
  return await getCategoryWithClient(client)(id);
}

export async function getCategoryByName(name: string) {
  return await getCategoryByNameWithClient(client)(name);
}

export async function listCategories(nextToken?: string | null | undefined) {
  return await listCategoriesWithClient(client)(nextToken);
}

export async function updateCategory(input: UpdateCategoryInput) {
  return await updateCategoryWithClient(client)(input);
}

export async function deleteCategory(input: DeleteCategoryInput) {
  return await deleteCategoryWithClient(client)(input);
}
