import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "@/constants"

export const GA_ID = GOOGLE_ANALYTICS_MEASUREMENT_ID

export const pageview = (url: string) => {
  if (!GA_ID) return
  window.gtag("config", GA_ID, {
    page_path: url,
  })
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}): void => {
  if (!GA_ID) return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
