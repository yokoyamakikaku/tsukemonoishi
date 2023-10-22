'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <div className="border-t py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4">
          <div className="mb-3">
            <Link className="text-lg" href="/">漬物石</Link>
          </div>
          <p className="text-sm">このサイトのコンテンツはOpenAIのAPIによって生成された内容です。内容の確認は十分に行われていません。検索の補助としての役割を目指しています。</p>
        </div>

        <div className="">
          <Link className='p-1 inline-block hover:bg-gray-100' href="/policy">プライバシーポリシー</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
