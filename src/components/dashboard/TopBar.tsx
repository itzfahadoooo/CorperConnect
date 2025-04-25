import { Bell, Search } from "lucide-react"
import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Search for housing, locations, or corps members..."
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/notifications"
            className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-100 rounded-full"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>

          {/* Mobile only - profile link */}
          <Link
            to="/dashboard/profile"
            className="lg:hidden relative w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <span className="text-gray-600 font-medium text-sm">JD</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default TopBar
