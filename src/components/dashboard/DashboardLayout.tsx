import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <TopBar />
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
