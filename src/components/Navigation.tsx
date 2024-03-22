'use client'

import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'

import { useGetAuthStatusQuery } from '@/hooks/auth'

const NavigationLink: FC<{ href: string } & PropsWithChildren> = ({ href, children}) => {
  return (
    <Link className="grow p-1 hover:bg-gray-50 rounded text-center" href={href}>{children}</Link>
  )
}

export default function Navigation () {
  const query = useGetAuthStatusQuery()

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
          <NavigationLink href="/">ホーム</NavigationLink>
          <NavigationLink href="/types">漬物石の種類</NavigationLink>
          <NavigationLink href="/selection">漬物石の選び方</NavigationLink>
          <NavigationLink href="/usage">漬物石の使い方</NavigationLink>
          <NavigationLink href="/history">漬物石の歴史</NavigationLink>
          <NavigationLink href="/recommendations">漬物石のおすすめ</NavigationLink>
          {query.isSuccess && (
            query.data === "AUTHORIZED" ? (
              <NavigationLink href="/user">マイページ</NavigationLink>
            ) : (
              <NavigationLink href="/login">ログイン</NavigationLink>
            )
          )}
        </div>
      </div>
    </>
  )
}
