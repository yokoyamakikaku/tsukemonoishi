/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  name: string,
  plan: PlanType,
  boughtPremiumPostIds?: Array< string > | null,
};

export enum PlanType {
  COMMUNITY = "COMMUNITY",
  PREMIUM = "PREMIUM",
}


export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  plan?: ModelPlanTypeInput | null,
  boughtPremiumPostIds?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPlanTypeInput = {
  eq?: PlanType | null,
  ne?: PlanType | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  name: string,
  plan: PlanType,
  boughtPremiumPostIds?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  plan?: PlanType | null,
  boughtPremiumPostIds?: Array< string > | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  name: string,
  description: string,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  name: string,
  description: string,
  communityPosts?: ModelCommunityPostConnection | null,
  premiumPosts?: ModelPremiumPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommunityPostConnection = {
  __typename: "ModelCommunityPostConnection",
  items:  Array<CommunityPost | null >,
  nextToken?: string | null,
};

export type CommunityPost = {
  __typename: "CommunityPost",
  id: string,
  title: string,
  body: string,
  categoryId: string,
  createdAt: string,
  category?: Category | null,
  updatedAt: string,
};

export type ModelPremiumPostConnection = {
  __typename: "ModelPremiumPostConnection",
  items:  Array<PremiumPost | null >,
  nextToken?: string | null,
};

export type PremiumPost = {
  __typename: "PremiumPost",
  id: string,
  title: string,
  body: string,
  categoryId: string,
  createdAt: string,
  category?: Category | null,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateCommunityPostInput = {
  id?: string | null,
  title: string,
  body: string,
  categoryId: string,
  createdAt?: string | null,
};

export type ModelCommunityPostConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommunityPostConditionInput | null > | null,
  or?: Array< ModelCommunityPostConditionInput | null > | null,
  not?: ModelCommunityPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommunityPostInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  categoryId?: string | null,
  createdAt?: string | null,
};

export type DeleteCommunityPostInput = {
  id: string,
};

export type CreatePremiumPostInput = {
  id?: string | null,
  title: string,
  body: string,
  categoryId: string,
  createdAt?: string | null,
};

export type ModelPremiumPostConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPremiumPostConditionInput | null > | null,
  or?: Array< ModelPremiumPostConditionInput | null > | null,
  not?: ModelPremiumPostConditionInput | null,
};

export type UpdatePremiumPostInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  categoryId?: string | null,
  createdAt?: string | null,
};

export type DeletePremiumPostInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  plan?: ModelPlanTypeInput | null,
  boughtPremiumPostIds?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelPremiumPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPremiumPostFilterInput | null > | null,
  or?: Array< ModelPremiumPostFilterInput | null > | null,
  not?: ModelPremiumPostFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelCommunityPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommunityPostFilterInput | null > | null,
  or?: Array< ModelCommunityPostFilterInput | null > | null,
  not?: ModelCommunityPostFilterInput | null,
};

export type ModelSubscriptionAccountFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  plan?: ModelSubscriptionStringInput | null,
  boughtPremiumPostIds?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPremiumPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPremiumPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPremiumPostFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionCommunityPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommunityPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommunityPostFilterInput | null > | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommunityPostMutationVariables = {
  input: CreateCommunityPostInput,
  condition?: ModelCommunityPostConditionInput | null,
};

export type CreateCommunityPostMutation = {
  createCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateCommunityPostMutationVariables = {
  input: UpdateCommunityPostInput,
  condition?: ModelCommunityPostConditionInput | null,
};

export type UpdateCommunityPostMutation = {
  updateCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteCommunityPostMutationVariables = {
  input: DeleteCommunityPostInput,
  condition?: ModelCommunityPostConditionInput | null,
};

export type DeleteCommunityPostMutation = {
  deleteCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreatePremiumPostMutationVariables = {
  input: CreatePremiumPostInput,
  condition?: ModelPremiumPostConditionInput | null,
};

export type CreatePremiumPostMutation = {
  createPremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePremiumPostMutationVariables = {
  input: UpdatePremiumPostInput,
  condition?: ModelPremiumPostConditionInput | null,
};

export type UpdatePremiumPostMutation = {
  updatePremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePremiumPostMutationVariables = {
  input: DeletePremiumPostInput,
  condition?: ModelPremiumPostConditionInput | null,
};

export type DeletePremiumPostMutation = {
  deletePremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      plan: PlanType,
      boughtPremiumPostIds?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPremiumPostQueryVariables = {
  id: string,
};

export type GetPremiumPostQuery = {
  getPremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPremiumPostsQueryVariables = {
  filter?: ModelPremiumPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPremiumPostsQuery = {
  listPremiumPosts?:  {
    __typename: "ModelPremiumPostConnection",
    items:  Array< {
      __typename: "PremiumPost",
      id: string,
      title: string,
      body: string,
      categoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPremiumPostsByCategoryIdWithCreatedAtQueryVariables = {
  categoryId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPremiumPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPremiumPostsByCategoryIdWithCreatedAtQuery = {
  listPremiumPostsByCategoryIdWithCreatedAt?:  {
    __typename: "ModelPremiumPostConnection",
    items:  Array< {
      __typename: "PremiumPost",
      id: string,
      title: string,
      body: string,
      categoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCategoriesByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesByNameQuery = {
  listCategoriesByName?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommunityPostQueryVariables = {
  id: string,
};

export type GetCommunityPostQuery = {
  getCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListCommunityPostsQueryVariables = {
  filter?: ModelCommunityPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommunityPostsQuery = {
  listCommunityPosts?:  {
    __typename: "ModelCommunityPostConnection",
    items:  Array< {
      __typename: "CommunityPost",
      id: string,
      title: string,
      body: string,
      categoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCommunityPostsByCategoryIdWithCreatedAtQueryVariables = {
  categoryId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommunityPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommunityPostsByCategoryIdWithCreatedAtQuery = {
  listCommunityPostsByCategoryIdWithCreatedAt?:  {
    __typename: "ModelCommunityPostConnection",
    items:  Array< {
      __typename: "CommunityPost",
      id: string,
      title: string,
      body: string,
      categoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
  id?: string | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
  id?: string | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
  id?: string | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    plan: PlanType,
    boughtPremiumPostIds?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePremiumPostSubscriptionVariables = {
  filter?: ModelSubscriptionPremiumPostFilterInput | null,
};

export type OnCreatePremiumPostSubscription = {
  onCreatePremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePremiumPostSubscriptionVariables = {
  filter?: ModelSubscriptionPremiumPostFilterInput | null,
};

export type OnUpdatePremiumPostSubscription = {
  onUpdatePremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePremiumPostSubscriptionVariables = {
  filter?: ModelSubscriptionPremiumPostFilterInput | null,
};

export type OnDeletePremiumPostSubscription = {
  onDeletePremiumPost?:  {
    __typename: "PremiumPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    name: string,
    description: string,
    communityPosts?:  {
      __typename: "ModelCommunityPostConnection",
      nextToken?: string | null,
    } | null,
    premiumPosts?:  {
      __typename: "ModelPremiumPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommunityPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommunityPostFilterInput | null,
};

export type OnCreateCommunityPostSubscription = {
  onCreateCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommunityPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommunityPostFilterInput | null,
};

export type OnUpdateCommunityPostSubscription = {
  onUpdateCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommunityPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommunityPostFilterInput | null,
};

export type OnDeleteCommunityPostSubscription = {
  onDeleteCommunityPost?:  {
    __typename: "CommunityPost",
    id: string,
    title: string,
    body: string,
    categoryId: string,
    createdAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};
