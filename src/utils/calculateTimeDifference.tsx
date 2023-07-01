import moment from "moment"

export default function calculateTimeDifference(start: string, end: string) {
  const startMoment = moment(`06-30-2023 ${start}`, "MM-DD-YYYY HH:mm")
  const endMoment = moment(`06-30-2023 ${end}`, "MM-DD-YYYY HH:mm")

  const duration = moment.duration(endMoment.diff(startMoment))

  return +`${duration.hours()}.${duration.minutes()}`
}
