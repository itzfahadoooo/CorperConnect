import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: string | number
    isPositive: boolean
  }
  iconColor?: string
  iconBgColor?: string
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  iconColor = "text-emerald-600",
  iconBgColor = "bg-emerald-100",
}: StatCardProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>

          {trend && (
            <div className="flex items-center mt-2">
              <span className={`text-xs ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
                {trend.isPositive ? "+" : ""}
                {trend.value}
              </span>
              <span className="text-xs text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>

        <div className={`p-3 rounded-full ${iconBgColor}`}>
          <Icon size={20} className={iconColor} />
        </div>
      </div>
    </div>
  )
}

export default StatCard
