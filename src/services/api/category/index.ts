import { ApiClient } from '../types';

import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import { CreateCategoryInput, DeleteCategoryInput, ListCategoriesQuery, UpdateCategoryInput } from '@/API';

export function createCategoryWithClient (client: ApiClient) {
  return async function createCategory (input: CreateCategoryInput) {
    const result = await client.graphql({
      query: mutations.createCategory,
      variables: { input }
    });

    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.createCategory;
  };
}

export function getCategoryWithClient (client: ApiClient) {
  return async function getCategory (id: string) {
    const result = await client.graphql({
      query: queries.getCategory,
      variables: { id },
      authMode: 'apiKey'
    });
    if (result.errors) throw new Error(result.errors[0].message);
    if (!result.data.getCategory) throw new Error('NotFound');
    return result.data.getCategory;
  };
}

export function getCategoryByNameWithClient (client: ApiClient) {
  return async function getCategoryByName (name: string) {
    const result = await client.graphql({
      query: queries.listCategoriesByName,
      variables: { name, limit: 1 },
      authMode: 'apiKey'
    });
    if (result.errors) throw new Error(result.errors[0].message);
    if (!result.data.listCategoriesByName) throw new Error('NotFound');
    const item = result.data.listCategoriesByName.items[0];
    if (!item) throw new Error('NotFound');
    return await getCategoryWithClient(client)(item.id);
  };
}

export function listCategoriesWithClient (client: ApiClient) {
  return async function listCategories (nextToken?: string | null | undefined): Promise<NonNullable<ListCategoriesQuery['listCategories']>['items'][number][]> {
    const result = await client.graphql({
      query: queries.listCategories,
      variables: { nextToken }
    });
    if (result.errors) throw new Error(result.errors[0].message);
    if (!result.data.listCategories) throw new Error('NotFound');
    if (!result.data.listCategories.nextToken) return result.data.listCategories.items;
    return [
      ...result.data.listCategories.items,
      ...(await listCategories(result.data.listCategories.nextToken))
    ];
  };
}

export function updateCategoryWithClient (client: ApiClient) {
  return async function updateCategory (input: UpdateCategoryInput) {
    const result = await client.graphql({
      query: mutations.updateCategory,
      variables: { input }
    });
    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.updateCategory;
  };
}

export function deleteCategoryWithClient (client: ApiClient) {
  return async function deleteCategory (input: DeleteCategoryInput) {
    const result = await client.graphql({
      query: mutations.deleteCategory,
      variables: { input }
    });
    if (result.errors) throw new Error(result.errors[0].message);
    return result.data.deleteCategory;
  };
}
