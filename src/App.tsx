import { useState } from "react"
import moment from "moment"
import SheetHeader from "./components/SheetHeader"
import TimeInput from "./components/TimeInput"

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
    <div className="text-text">
      <div className="grid grid-cols-5 gap-5 py-4 rounded">
        {headerNames.map(name => (
          <SheetHeader icon={name} header={name} key={name} />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4 border-4 border-secondaryBg py-4 rounded">
        {startStopData.map(({ day, start, stop }) => (
          <>
            <span className="w-3/5 mx-auto">{day}</span>
            <input
              value={start}
              type="time"
              onChange={e => updateStartStopData(day, "start", e.target.value)}
              className="w-3/5 shadow-sm py-1 px-2 rounded mx-auto"
            />
            <input
              value={stop}
              type="time"
              onChange={e => updateStartStopData(day, "stop", e.target.value)}
              className="w-3/5 shadow-sm py-1 px-2 rounded mx-auto"
            />
            <span className="mx-auto">Duration</span>
            <span className="mx-auto">Earnings</span>
          </>
        ))}
      </div>
    </div>
  )
}
