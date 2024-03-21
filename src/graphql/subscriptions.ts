/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount(
  $filter: ModelSubscriptionAccountFilterInput
  $id: String
) {
  onCreateAccount(filter: $filter, id: $id) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount(
  $filter: ModelSubscriptionAccountFilterInput
  $id: String
) {
  onUpdateAccount(filter: $filter, id: $id) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount(
  $filter: ModelSubscriptionAccountFilterInput
  $id: String
) {
  onDeleteAccount(filter: $filter, id: $id) {
    id
    name
    plan
    boughtPremiumPostIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreatePremiumPost = /* GraphQL */ `subscription OnCreatePremiumPost(
  $filter: ModelSubscriptionPremiumPostFilterInput
) {
  onCreatePremiumPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePremiumPostSubscriptionVariables,
  APITypes.OnCreatePremiumPostSubscription
>;
export const onUpdatePremiumPost = /* GraphQL */ `subscription OnUpdatePremiumPost(
  $filter: ModelSubscriptionPremiumPostFilterInput
) {
  onUpdatePremiumPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePremiumPostSubscriptionVariables,
  APITypes.OnUpdatePremiumPostSubscription
>;
export const onDeletePremiumPost = /* GraphQL */ `subscription OnDeletePremiumPost(
  $filter: ModelSubscriptionPremiumPostFilterInput
) {
  onDeletePremiumPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePremiumPostSubscriptionVariables,
  APITypes.OnDeletePremiumPostSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateCommunityPost = /* GraphQL */ `subscription OnCreateCommunityPost(
  $filter: ModelSubscriptionCommunityPostFilterInput
) {
  onCreateCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityPostSubscriptionVariables,
  APITypes.OnCreateCommunityPostSubscription
>;
export const onUpdateCommunityPost = /* GraphQL */ `subscription OnUpdateCommunityPost(
  $filter: ModelSubscriptionCommunityPostFilterInput
) {
  onUpdateCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityPostSubscriptionVariables,
  APITypes.OnUpdateCommunityPostSubscription
>;
export const onDeleteCommunityPost = /* GraphQL */ `subscription OnDeleteCommunityPost(
  $filter: ModelSubscriptionCommunityPostFilterInput
) {
  onDeleteCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityPostSubscriptionVariables,
  APITypes.OnDeleteCommunityPostSubscription
>;
