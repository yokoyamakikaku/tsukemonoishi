/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      plan
      boughtPremiumPostIds
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const getPremiumPost = /* GraphQL */ `query GetPremiumPost($id: ID!) {
  getPremiumPost(id: $id) {
    id
    title
    body
    categoryId
    createdAt
    category {
      id
      title
      name
      description
      communityPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPremiumPostQueryVariables,
  APITypes.GetPremiumPostQuery
>;
export const listPremiumPosts = /* GraphQL */ `query ListPremiumPosts(
  $filter: ModelPremiumPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPremiumPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      body
      categoryId
      createdAt
      category {
        id
        title
        name
        description
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPremiumPostsQueryVariables,
  APITypes.ListPremiumPostsQuery
>;
export const listPremiumPostsByCategoryIdWithCreatedAt = /* GraphQL */ `query ListPremiumPostsByCategoryIdWithCreatedAt(
  $categoryId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPremiumPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPremiumPostsByCategoryIdWithCreatedAt(
    categoryId: $categoryId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      body
      categoryId
      createdAt
      category {
        id
        title
        name
        description
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPremiumPostsByCategoryIdWithCreatedAtQueryVariables,
  APITypes.ListPremiumPostsByCategoryIdWithCreatedAtQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    title
    name
    description
    communityPosts {
      items {
        id
        title
        body
        categoryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      name
      description
      communityPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listCategoriesByName = /* GraphQL */ `query ListCategoriesByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoriesByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      name
      description
      communityPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesByNameQueryVariables,
  APITypes.ListCategoriesByNameQuery
>;
export const getCommunityPost = /* GraphQL */ `query GetCommunityPost($id: ID!) {
  getCommunityPost(id: $id) {
    id
    title
    body
    categoryId
    createdAt
    category {
      id
      title
      name
      description
      communityPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommunityPostQueryVariables,
  APITypes.GetCommunityPostQuery
>;
export const listCommunityPosts = /* GraphQL */ `query ListCommunityPosts(
  $filter: ModelCommunityPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommunityPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      body
      categoryId
      createdAt
      category {
        id
        title
        name
        description
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommunityPostsQueryVariables,
  APITypes.ListCommunityPostsQuery
>;
export const listCommunityPostsByCategoryIdWithCreatedAt = /* GraphQL */ `query ListCommunityPostsByCategoryIdWithCreatedAt(
  $categoryId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommunityPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommunityPostsByCategoryIdWithCreatedAt(
    categoryId: $categoryId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      body
      categoryId
      createdAt
      category {
        id
        title
        name
        description
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommunityPostsByCategoryIdWithCreatedAtQueryVariables,
  APITypes.ListCommunityPostsByCategoryIdWithCreatedAtQuery
>;
