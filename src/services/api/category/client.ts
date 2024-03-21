import { generateClient } from "aws-amplify/api";

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
  const client = generateClient()
  return await createCategoryWithClient(client)(input)
}

export async function getCategory(id: string) {
  const client = generateClient()
  return await getCategoryWithClient(client)(id)
}

export async function getCategoryByName(name: string) {
  const client = generateClient()
  return await getCategoryByNameWithClient(client)(name)
}

export async function listCategories(nextToken?: string | null | undefined) {
  const client = generateClient()
  return await listCategoriesWithClient(client)(nextToken)
}

export async function updateCategory(input: UpdateCategoryInput) {
  const client = generateClient()
  return await updateCategoryWithClient(client)(input)
}

export async function deleteCategory(input: DeleteCategoryInput) {
  const client = generateClient()
  return await deleteCategoryWithClient(client)(input)
}
