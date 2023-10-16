import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '漬物石',
  description: '漬物石のアプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1057611392436338"
        crossOrigin="anonymous" />
    </html>
  )
}
