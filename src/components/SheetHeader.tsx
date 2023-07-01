import { useState, useEffect } from "react"

interface IconProps {
  icon: string
  header: string
}

export default function SheetHeader({ icon, header }: IconProps) {
  const [iconSrc, setIconSrc] = useState("")

  useEffect(() => {
    ;(async () => {
      const iconModule = await import(`../assets/${icon}.svg`)
      setIconSrc(iconModule.default)
    })()
  }, [])

  return (
    <div className="flex content-center justify-center">
      <img className="w-5 mr-1" src={iconSrc} />
      <strong className="font-medium">{header}</strong>
    </div>
  )
}
