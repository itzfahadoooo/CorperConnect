import DashboardLayout from "../../../components/dashboard/DashboardLayout"
import { MapPin, Star, Search, Filter, Phone, Clock } from "lucide-react"
import {Link} from "react-router-dom"
import image1 from "@/assets/house1.jpg"


export default function NYSCOfficesPage() {
  // Sample data for NYSC offices
  const offices = [
    {
      id: "1",
      name: "NYSC Lagos State Secretariat",
      address: "Surulere, Lagos",
      phone: "+234 801 234 5678",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      rating: 4.2,
      reviews: 45,
      image: image1,
      services: ["Letter Collection", "PPA Changes", "Relocation", "Certificate Collection"],
    },
    {
      id: "2",
      name: "NYSC FCT Secretariat",
      address: "Maitama, Abuja",
      phone: "+234 802 345 6789",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      rating: 4.5,
      reviews: 62,
      image: image1,
      services: ["Letter Collection", "PPA Changes", "Relocation", "Certificate Collection"],
    },
    {
      id: "3",
      name: "NYSC Rivers State Secretariat",
      address: "Port Harcourt, Rivers",
      phone: "+234 803 456 7890",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      rating: 3.8,
      reviews: 37,
      image: image1,
      services: ["Letter Collection", "PPA Changes", "Relocation", "Certificate Collection"],
    },
    {
      id: "4",
      name: "NYSC Kaduna State Secretariat",
      address: "Kaduna, Kaduna State",
      phone: "+234 804 567 8901",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      rating: 4.0,
      reviews: 29,
      image: image1,
      services: ["Letter Collection", "PPA Changes", "Relocation", "Certificate Collection"],
    },
  ]

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">NYSC State Offices</h1>
        <p className="text-gray-600">Find information and reviews about NYSC offices across Nigeria</p>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Search for NYSC offices by state or location"
            />
          </div>

          {/* State filter */}
          <div className="relative w-full md:w-48">
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option value="">All States</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">FCT Abuja</option>
              <option value="rivers">Rivers</option>
              <option value="kaduna">Kaduna</option>
              <option value="kano">Kano</option>
              <option value="oyo">Oyo</option>
              {/* Add more states */}
            </select>
          </div>

          {/* Filter button */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Offices list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((office) => (
          <Link
            key={office.id}
            to={`/dashboard/offices/${office.id}`}
            className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
          >
            <div className="relative h-48">
              <img src={office.image || "/placeholder.svg"} alt={office.name}  className="object-cover w-full h-full " />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md flex items-center shadow-sm">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-medium">{office.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({office.reviews})</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{office.name}</h3>
              <div className="flex items-center gap-1 text-gray-600 mt-1">
                <MapPin size={14} />
                <span className="text-sm">{office.address}</span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="text-gray-500" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={14} className="text-gray-500" />
                  <span>{office.hours}</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-medium text-gray-500 mb-2">Services</div>
                <div className="flex flex-wrap gap-2">
                  {office.services.map((service, index) => (
                    <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  )
}
