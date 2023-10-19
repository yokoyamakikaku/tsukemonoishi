import { memo } from "react";
import * as dateFns from 'date-fns'

const DateTimeLabel= memo(
  function DateTimeLabel ({ dateTime, format = 'yyyy-MM-dd' }: { dateTime: string, format?: string }) {
    const date = new Date(dateTime)
    const label = dateFns.format(date, format)
    return label
  }
)

export default DateTimeLabel
