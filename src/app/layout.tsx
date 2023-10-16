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
    </html>
  )
}
