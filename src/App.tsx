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
    <div className="grid grid-cols-5 m-5 text-text">
      {headerNames.map(name => (
        <SheetHeader icon={name} header={name} key={name} />
      ))}
      {startStopData.map(({ day, start, stop }) => (
        <>
          <strong>{day}</strong>
          <input
            value={start}
            type="time"
            onChange={e => updateStartStopData(day, "start", e.target.value)}
            className="w-1/2"
          />
          <input
            value={stop}
            type="time"
            onChange={e => updateStartStopData(day, "stop", e.target.value)}
            className="w-1/2"
          />
          <span>Duration</span>
          <span>Earnings</span>
        </>
      ))}
    </div>
  )
}
