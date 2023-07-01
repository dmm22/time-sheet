import { SetStateAction } from "react"
import calculateTimeDifference from "../utils/calculateTimeDifference"

interface WorkSummaryPanelProps {
  hourlyRate: number
  setHourlyRate: React.Dispatch<SetStateAction<number>>
  startStopData: {
    day: string
    start: string
    stop: string
  }[]
}

export default function WorkSummaryPanel({
  hourlyRate,
  setHourlyRate,
  startStopData,
}: WorkSummaryPanelProps) {
  const totalHours = startStopData.reduce((acc, { start, stop }) => {
    const duration = calculateTimeDifference(start, stop)
    return acc + duration
  }, 0)

  return (
    <div className="mx-auto my-8 flex justify-evenly gap-10 rounded p-2">
      <div className="flex w-48 flex-col px-4 py-2 text-center shadow-sm">
        <label className="text-secondary">Hourly Rate</label>
        <div className="flex items-center">
          <span className="mr-1 text-2xl">$</span>
          <input
            onChange={e => setHourlyRate(+e.target.value)}
            value={hourlyRate}
            type="number"
            className="selection:bg-transparent m-auto w-3/4 rounded px-2 py-1 outline-none focus:outline-primary"
          />
        </div>
      </div>
      <div className="flex w-48 flex-col px-4 py-2 text-center shadow-sm">
        <label className="text-secondary">Total Hours</label>
        <output className="text-2xl font-medium">{totalHours} Hrs</output>
      </div>
      <div className="flex w-48 flex-col px-4 py-2 text-center shadow-sm">
        <label className="text-secondary">Total Earnings</label>
        <output className="text-2xl font-medium">
          ${totalHours * hourlyRate ?? 0}
        </output>
      </div>
    </div>
  )
}
