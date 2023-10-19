import { writeFile } from 'fs/promises'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import 'dotenv/config'
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

console.info("カテゴリデータの作成開始")

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{
    role: "user",
    content:
`漬物ではなく漬物石のブログを作ろうと考えています。
ブログのカテゴリを考えてJSONにして返してください。
5個考えてください。nameはURLに使うため長さを最低限のものにしてください。
[
  {"title": "{カテゴリの名前}","description": "{カテゴリの説明}","name":"{管理用の英語名}"}
]
`
  }],
  temperature: 0,
  max_tokens: 512,
})

console.info("カテゴリデータの作成完了")

const json = response.choices[0].message.content

await writeFile(
  resolve(__dirname, '../../data/category.json'),
  json, { encoding: 'utf-8' }
)

console.info("ファイルの書き出し成功")
