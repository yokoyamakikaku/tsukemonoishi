/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
    id
    title
    name
    description
    communityPosts {
      nextToken
      __typename
    }
    premiumPosts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
    id
    title
    name
    description
    communityPosts {
      nextToken
      __typename
    }
    premiumPosts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
    id
    title
    name
    description
    communityPosts {
      nextToken
      __typename
    }
    premiumPosts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createCommunityPost = /* GraphQL */ `mutation CreateCommunityPost(
  $input: CreateCommunityPostInput!
  $condition: ModelCommunityPostConditionInput
) {
  createCommunityPost(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateCommunityPostMutationVariables,
  APITypes.CreateCommunityPostMutation
>;
export const updateCommunityPost = /* GraphQL */ `mutation UpdateCommunityPost(
  $input: UpdateCommunityPostInput!
  $condition: ModelCommunityPostConditionInput
) {
  updateCommunityPost(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateCommunityPostMutationVariables,
  APITypes.UpdateCommunityPostMutation
>;
export const deleteCommunityPost = /* GraphQL */ `mutation DeleteCommunityPost(
  $input: DeleteCommunityPostInput!
  $condition: ModelCommunityPostConditionInput
) {
  deleteCommunityPost(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteCommunityPostMutationVariables,
  APITypes.DeleteCommunityPostMutation
>;
export const createPremiumPost = /* GraphQL */ `mutation CreatePremiumPost(
  $input: CreatePremiumPostInput!
  $condition: ModelPremiumPostConditionInput
) {
  createPremiumPost(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreatePremiumPostMutationVariables,
  APITypes.CreatePremiumPostMutation
>;
export const updatePremiumPost = /* GraphQL */ `mutation UpdatePremiumPost(
  $input: UpdatePremiumPostInput!
  $condition: ModelPremiumPostConditionInput
) {
  updatePremiumPost(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdatePremiumPostMutationVariables,
  APITypes.UpdatePremiumPostMutation
>;
export const deletePremiumPost = /* GraphQL */ `mutation DeletePremiumPost(
  $input: DeletePremiumPostInput!
  $condition: ModelPremiumPostConditionInput
) {
  deletePremiumPost(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeletePremiumPostMutationVariables,
  APITypes.DeletePremiumPostMutation
>;
