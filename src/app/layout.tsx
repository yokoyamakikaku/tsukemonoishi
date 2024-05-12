import './globals.css'
import type { Metadata } from 'next'
import { Zen_Old_Mincho } from 'next/font/google'

import GoogleAnalytics from './components/GoogleAnalytics'
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from './components/GoogleAnalytics/constants'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const font = Zen_Old_Mincho({
  weight: '400',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: '漬物石',
  description: '漬物石の情報サイト'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1057611392436338" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1057611392436338"
          crossOrigin="anonymous">
        </script>
      </head>
      <body className={font.className}>
        <Providers>
          <Navigation />
          <div className="min-h-screen max-w-4xl mx-auto flex flex-col gap-12 py-12">
            {children}
          </div>
          <Footer />
        </Providers>
        <GoogleAnalytics
          measurementId={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
