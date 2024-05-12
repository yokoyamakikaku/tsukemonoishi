'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function TrackPageView () {
  const pathname = usePathname()

  useEffect(() => {
    console.log('Page view:', pathname)
  }, [pathname])

  return null
}
