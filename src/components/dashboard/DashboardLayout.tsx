"use client"

import { useState, useEffect, type ReactNode } from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // Listen for custom event from sidebar
  useEffect(() => {
    const handleSidebarToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ isCollapsed: boolean }>
      setIsSidebarCollapsed(customEvent.detail.isCollapsed)
    }

    window.addEventListener("sidebarToggle", handleSidebarToggle as EventListener)

    return () => {
      window.removeEventListener("sidebarToggle", handleSidebarToggle)
    }

  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`}>
        <TopBar />
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
