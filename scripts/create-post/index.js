import { writeFile, readFile, stat } from 'fs/promises'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import 'dotenv/config'
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
const categoryJsonPath = resolve(__dirname, '../../data/category.json')

if (!(await stat(categoryJsonPath))) throw Error("NotFound")
const categoryJson = await readFile(categoryJsonPath)
const categories = JSON.parse(categoryJson)

await Promise.all(categories.map(async category => {
  const { title, description, name } = category
  console.log(`${title}: 開始`)
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      content:
`漬物石に関するブログの記事のタイトルを10個考えてください。
ブログのタイトルはJSONにして返してください。bodyは空のままでいいです。
カテゴリ名:${title}
カテゴリ説明:${description}
[
  {"title": "{記事のタイトル}","body": "" }
]
`
    }],
    temperature: 0,
    max_tokens: 512,
  })

  const postDrafts = JSON.parse(response.choices[0].message.content)
  console.log(`${title}の記事の下書きが作成された`)

  const posts = await Promise.all(postDrafts.map(async post => {
    const { title: categoryTitle, description: categoryDescription } = category
    const { title: postTitle } = post
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content:
  `漬物石に関するブログの記事を考えてください。ブログの内容はMarkdownで書いてください。1000文字程度の内容にしてください。
カテゴリ名:${categoryTitle},カテゴリ説明:${categoryDescription},記事のタイトル:${postTitle}
  `
      }],
      temperature: 0,
      max_tokens: 1024,
    })

    console.log(`${postTitle}の内容が作成された`)

    return {
      title: postTitle,
      body: response.choices[0].message.content
    }
  }))

  const postsJson = JSON.stringify(posts, null, 2)
  const postJsonPath = resolve(__dirname, `../../data/${name}-post.json`)
  await writeFile(postJsonPath, postsJson, { encoding:'utf-8' })
  console.log(`${postJsonPath}にファイルが書き出された`)
}))
