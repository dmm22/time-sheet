import SheetHeader from "./components/SheetHeader"

export default function App() {
  const headerNames = ["Day", "Start", "Stop", "Duration", "Earnings"]

  return (
    <div className="grid grid-cols-5 m-5">
      {headerNames.map(name => (
        <SheetHeader icon={name} header={name} key={name} />
      ))}
    </div>
  )
}
2
