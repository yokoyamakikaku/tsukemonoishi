import { GTAG_JS_URL } from './constants'

export function createGtagScriptElement (measurementId: string) {
  const script = document.createElement('script')
  const url = new URL(GTAG_JS_URL)
  url.searchParams.set('id', measurementId)
  script.src = url.toString()
  script.async = true
  script.crossOrigin = 'anonymous'
  return script
}
