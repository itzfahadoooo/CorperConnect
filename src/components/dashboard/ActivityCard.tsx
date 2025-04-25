import type { ReactNode } from "react"

interface ActivityCardProps {
  avatar: string | ReactNode
  name: string
  action: string
  time: string
  content?: string
}

const ActivityCard = ({ avatar, name, action, time, content }: ActivityCardProps) => {
  return (
    <div className="flex gap-3 py-3 border-b last:border-0">
      {typeof avatar === "string" ? (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
          {avatar}
        </div>
      )}

      <div>
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-medium text-sm">{name}</span>
          <span className="text-sm text-gray-600">{action}</span>
          <span className="text-xs text-gray-500">• {time}</span>
        </div>

        {content && <p className="text-sm mt-1 text-gray-700">{content}</p>}
      </div>
    </div>
  )
}

export default ActivityCard
