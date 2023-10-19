import path, { resolve } from 'path'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import inquirer from 'inquirer'
import { fromIni } from '@aws-sdk/credential-providers'
import {
  AppSyncClient,
  ListDataSourcesCommand,
  ListGraphqlApisCommand
} from '@aws-sdk/client-appsync'
import { v4 as uuid } from 'uuid'
import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { marshall } from '@aws-sdk/util-dynamodb'

const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const credentialsTxtPath = path.resolve(HOME, '.aws/credentials')
const credentialsTxt = await readFile(credentialsTxtPath, { encoding: 'utf-8' })

/** @type {{ name: string, value: string }[]} */
const profileChoices = []
for (const line of credentialsTxt.split('\n')) {
  const match = line.match(/\[(.*)\]/)
  if (!match) continue
  const profile = match[1]
  profileChoices.push({ name: profile, value: profile })
}

/** @type {{ profile: string }} */
const { profile } = await inquirer.prompt({
  type   : 'list',
  message: 'AWS Profile を選択してください',
  name   : 'profile',
  choices: profileChoices
})

/** @type {{ region: string }} */
const { region } = await inquirer.prompt({
  type   : 'input',
  message: 'リージョンを入力してください',
  name   : 'region',
  default: 'ap-northeast-1'
})

const credentials = fromIni({ profile })
const appSyncClient = new AppSyncClient({ credentials, region })
const dynamoDb = new DynamoDB({ credentials, region })

const graphqlApiChoices = []
let listGraphqlApisNextToken
do {
  const result = await appSyncClient.send(new ListGraphqlApisCommand({ nextToken: listGraphqlApisNextToken }))
  for (const graphqlApi of result.graphqlApis) graphqlApiChoices.push({ name: graphqlApi.name, value: graphqlApi })
  listGraphqlApisNextToken = result.nextToken
} while (listGraphqlApisNextToken)

/** @type {{ graphqlApi: import('@aws-sdk/client-appsync').GraphqlApi }} */
const { graphqlApi: { apiId } } = await inquirer.prompt({
  type   : 'list',
  message: 'APIを選択してください',
  name   : 'graphqlApi',
  choices: graphqlApiChoices
})

/** @type {string | null} */
let CategoryTableName = null
/** @type {string | null} */
let CommunityPostTableName = null
/** @type {string | null} */
let PremiumPostTableName = null

/** @type {string | undefined} */
let nextToken = undefined
do {
  /** @type {import('@aws-sdk/client-appsync').ListDataSourcesCommandInput} */
  const input = { apiId, nextToken }
  const result = await appSyncClient.send(new ListDataSourcesCommand(input))
  for (const dataSource of result.dataSources) {
    switch (dataSource.name) {
      case 'CategoryTable':
        CategoryTableName = dataSource.dynamodbConfig.tableName
        break
      case 'CommunityPostTable':
        CommunityPostTableName = dataSource.dynamodbConfig.tableName
        break
      case 'PremiumPostTable':
        PremiumPostTableName = dataSource.dynamodbConfig.tableName
        break
    }
  }
  nextToken = result.nextToken
} while (typeof nextToken === 'string')

if(typeof CategoryTableName !== 'string') throw Error('NoCategoryTableName')
if(typeof CommunityPostTableName !== 'string') throw Error('NoCommunityPostTableName')
if(typeof PremiumPostTableName !== 'string') throw Error('NoPremiumPostTableName')

const categoryJsonPath = resolve(__dirname, '../../data/category.json')
const categoryJson = await readFile(categoryJsonPath)
const categories = JSON.parse(categoryJson)

await Promise.all(categories.map(async category => {
  const categoryId= uuid()

  const postJsonPath = resolve(__dirname,`../../data/${category.name}-post.json`)
  const postJson = await readFile(postJsonPath)
  const posts = JSON.parse(postJson)

  const {
    communityPosts,
    premiumPosts
  } = posts.reduce(({
    communityPosts,
    premiumPosts
  }, post, index, posts) => (
    index < posts.length * 0.8 ? {
      communityPosts: [...communityPosts, post],
      premiumPosts,
    } : {
      communityPosts,
      premiumPosts: [...premiumPosts, post]
    }
  ), {
    communityPosts: [],
    premiumPosts: []
  })

  await Promise.all([
    dynamoDb.putItem({
      TableName: CategoryTableName,
      Item     : marshall({
        __typename : 'Category',
        id         : categoryId,
        title      : category.title,
        name       : category.name,
        description: category.description,
        createdAt  : new Date().toISOString(),
        updatedAt  : new Date().toISOString()
      })
    }),
    ...communityPosts.map(post =>
      dynamoDb.putItem({
        TableName: CommunityPostTableName,
        Item     : marshall({
          __typename : 'CommunityPost',
          id         : uuid(),
          title      : post.title,
          body       : post.body,
          categoryId : categoryId,
          createdAt  : new Date().toISOString(),
          updatedAt  : new Date().toISOString()
        })
      }),
    ),
    ...premiumPosts.map(post =>
      dynamoDb.putItem({
        TableName: PremiumPostTableName,
        Item     : marshall({
          __typename : 'PremiumPost',
          id         : uuid(),
          title      : post.title,
          body       : post.body,
          categoryId : categoryId,
          createdAt  : new Date().toISOString(),
          updatedAt  : new Date().toISOString()
        })
      }),
    ),
  ])
}))
