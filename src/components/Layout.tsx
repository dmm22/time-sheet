import Navbar from "./Navbar"

type LayoutProps = { children: JSX.Element | JSX.Element[] }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}
