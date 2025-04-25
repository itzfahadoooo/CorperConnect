import { MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"

interface HousingCardProps {
  id: string
  title: string
  location: string
  price: number
  rating: number
  imageUrl: string
  verified: boolean
  distance?: string
}

const HousingCard = ({ id, title, location, price, rating, imageUrl, verified, distance }: HousingCardProps) => {
  return (
    <Link to={`/dashboard/housing/${id}`} className="block group">
      <div className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative h-48">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          {verified && (
            <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-md">
              Verified
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-base group-hover:text-emerald-600 transition-colors">{title}</h3>

          <div className="flex items-center mt-2 text-sm text-gray-500">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
            {distance && <span className="ml-1">• {distance}</span>}
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="font-semibold">₦{price.toLocaleString()}/month</p>
            <div className="flex items-center">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HousingCard
