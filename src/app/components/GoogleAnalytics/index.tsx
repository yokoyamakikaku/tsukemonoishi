'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { createGtagScriptElement } from './utilities'

export default function GoogleAnalytics ({
  measurementId
}: {
  measurementId?: string | null
}) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof measurementId !== 'string') {
      console.warn('Google Analytics Measurement ID is not provided')
      return
    }

    const gtagScript = createGtagScriptElement(measurementId)
    document.body.appendChild(gtagScript)

    gtagScript.addEventListener('load', function () {
      window.dataLayer = window.dataLayer || []
      const dataLayer = window.dataLayer
      function gtag(...args: any[]){dataLayer.push(...args)}
      gtag('js', new Date())
      gtag('config', measurementId)
      console.info('Google Analytics is loaded pathname:', pathname, window.location.href)
    }, { once: true })

    return function cleanup () {
      document.body.removeChild(gtagScript)
    }
  }, [measurementId, pathname])

  return null
}
