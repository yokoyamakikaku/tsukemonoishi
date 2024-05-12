"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { Suspense, useEffect } from "react"

import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "@/constants"

export const pageview = (path: string) => {
  window.gtag("config", GOOGLE_ANALYTICS_MEASUREMENT_ID, {
    page_path: path,
  })
}

function GoogleAnalyticsContent () {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

export default function GoogleAnalytics () {
  return (
    <Suspense>
      <GoogleAnalyticsContent />
    </Suspense>
  )
}
