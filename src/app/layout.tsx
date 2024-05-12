import './globals.css'
import type { Metadata } from 'next'
import { Zen_Old_Mincho } from 'next/font/google'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import TrackPageView from '@/components/TrackPageView'
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from '@/constants'

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
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_MEASUREMENT_ID}`} ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_MEASUREMENT_ID}');
          `,
          }}
        />
      </head>
      <body className={font.className}>
        <Providers>
          <Navigation />
          <div className="min-h-screen max-w-4xl mx-auto flex flex-col gap-12 py-12">
            {children}
          </div>
          <Footer />
        </Providers>
        <TrackPageView />
      </body>
    </html>
  )
}
