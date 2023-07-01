import { useState } from "react"
import moment from "moment"
import SheetHeader from "./components/SheetHeader"
import calculateTimeDifference from "./utils/calculateTimeDifference"
import Layout from "./components/Layout"
import WorkSummaryPanel from "./components/WorkSummaryPanel"

const headerNames = ["Day", "Start", "Stop", "Duration", "Earnings"]
const daysThisWeek = Array.from({ length: 7 }, (_, i) =>
  moment().startOf("week").add(i, "days").format("dddd M/D")
)

export default function App() {
  const [startStopData, setStartStopData] = useState(() =>
    daysThisWeek.map(day => ({
      day,
      start: "00:00",
      stop: "00:00",
    }))
  )
  const [hourlyRate, setHourlyRate] = useState<number | null>(null)

  function updateStartStopData(
    dayToModify: string,
    startOrStop: "start" | "stop",
    newValue: string
  ) {
    setStartStopData(startStopdata =>
      startStopdata.map(rowData => {
        if (rowData.day === dayToModify) {
          return { ...rowData, [startOrStop]: newValue }
        } else return rowData
      })
    )
  }

  return (
    <Layout>
      <WorkSummaryPanel
        hourlyRate={hourlyRate}
        setHourlyRate={setHourlyRate}
        startStopData={startStopData}
      />
      <div className="text-text">
        <div className="grid grid-cols-5 gap-5 rounded py-4">
          {headerNames.map(name => (
            <SheetHeader icon={name} header={name} key={name} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4 rounded border-4 border-secondaryBg py-4">
          {startStopData.map(({ day, start, stop }) => {
            const duration = calculateTimeDifference(start, stop)
            return (
              <>
                <span
                  className={`mx-auto w-3/5 ${
                    day === moment().format("dddd M/D")
                      ? "font-bold text-primary"
                      : ""
                  }`}
                >
                  {day}
                </span>
                <input
                  value={start}
                  type="time"
                  onChange={e =>
                    updateStartStopData(day, "start", e.target.value)
                  }
                  className="selection:bg-transparent mx-auto w-3/5 rounded px-2 py-1 shadow-sm outline-none focus:outline-primary"
                />
                <input
                  value={stop}
                  type="time"
                  onChange={e =>
                    updateStartStopData(day, "stop", e.target.value)
                  }
                  className="mx-auto w-3/5 rounded px-2 py-1 shadow-sm"
                />
                <span className="mx-auto">{duration} Hrs</span>
                <span className="mx-auto">${duration * (hourlyRate ?? 0)}</span>
              </>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
