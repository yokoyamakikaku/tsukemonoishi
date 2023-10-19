'use client'

import Link from 'next/link'

const Navigation = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-col py-6 px-1 justify-center items-center gap-4">
        <Link href="/" className='p-2 block text-4xl hover:bg-gray-50 rounded'>
          漬物石
        </Link>
        <p>漬物石に関する情報をまとめるブログ</p>
      </div>
      <div className='border-b bg-white sticky top-0'>
        <div className="max-w-4xl mx-auto flex py-1 flex-wrap">
          <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href="/">ホーム</Link>
          <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href="/types">漬物石の種類</Link>
          <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href="/selection">漬物石の選び方</Link>
          <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href="/usage">漬物石の使い方</Link>
          <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href="/history">漬物石の歴史</Link>
          <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href="/recommendations">漬物石のおすすめ</Link>
        </div>
      </div>
    </>
  )
}

export default Navigation
