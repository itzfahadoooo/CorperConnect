"use client"

import { Link, useLocation } from "react-router-dom"
import { Home, Building, Map, Users, MessageSquare, Bell, Settings, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

const Sidebar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: Home },
    { name: "Housing", path: "/dashboard/housing", icon: Building },
    { name: "Locations", path: "/dashboard/locations", icon: Map },
    { name: "Community", path: "/dashboard/community", icon: Users },
    { name: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { name: "Notifications", path: "/dashboard/notifications", icon: Bell },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-emerald-600 text-white"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-lg text-emerald-700">CorperConnect</span>
            </Link>
          </div>

          {/* User info */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-medium">JD</span>
              </div>
              <div>
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-gray-500">Lagos State • 2023 Batch A</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon

                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                        isActive ? "bg-emerald-50 text-emerald-700 font-medium" : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <Link
              to="/logout"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Sidebar
