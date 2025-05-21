"use client";

import { useState } from "react";
import { Filter, MapPin, Search } from "lucide-react";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import HousingCard from "../../../components/dashboard/HousingCard";
import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";


import house3 from "@/assets/house3.jpg";
import house4 from "@/assets/house4.jpg";
import house5 from "@/assets/house5.jpg";

import house6 from "@/assets/house6.jpg";

const Housing = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample data
  const housingListings = [
    {
      id: "1",
      title: "2 Bedroom Apartment near Federal Secretariat",
      location: "Ikeja, Lagos",
      price: 120000,
      rating: 4.8,
      imageUrl: house1,
      verified: true,
      distance: "2.5km from PPA",
    },
    {
      id: "2",
      title: "Single Room Self-Contain with 24/7 Power",
      location: "Wuse, Abuja",
      price: 85000,
      rating: 4.5,
      imageUrl: house2,
      verified: true,
    },
    {
      id: "3",
      title: "Shared 3 Bedroom Flat with Corps Members",
      location: "GRA, Port Harcourt",
      price: 65000,
      rating: 4.2,
      imageUrl: house3,
      verified: false,
    },
    {
      id: "4",
      title: "Studio Apartment with Shared Facilities",
      location: "Bodija, Ibadan",
      price: 55000,
      rating: 4.0,
      imageUrl: house4,
      verified: true,
    },
    {
      id: "5",
      title: "1 Bedroom Flat in Gated Estate",
      location: "Asaba, Delta",
      price: 90000,
      rating: 4.7,
      imageUrl: house5,
      verified: true,
    },
    {
      id: "6",
      title: "Room in a Shared Apartment with Corps Members",
      location: "Kaduna South, Kaduna",
      price: 45000,
      rating: 3.9,
      imageUrl: house6,
      verified: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Housing Listings</h1>
        <p className="text-gray-600">
          Find verified and affordable housing options near your PPA.
        </p>
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Search for housing by location, features, etc."
            />
          </div>

          {/* Location filter */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin size={18} className="text-gray-400" />
            </div>
            <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option value="">All Locations</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="rivers">Rivers</option>
              <option value="kaduna">Kaduna</option>
            </select>
          </div>

          {/* Filter button */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Advanced filters */}
        {filterOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Housing Type
              </label>
              <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">All Types</option>
                <option value="single-room">Single Room</option>
                <option value="self-contain">Self Contain</option>
                <option value="1-bedroom">1 Bedroom Flat</option>
                <option value="2-bedroom">2 Bedroom Flat</option>
                <option value="shared">Shared Apartment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification
              </label>
              <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">All Listings</option>
                <option value="verified">Verified Only</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Housing listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {housingListings.map((listing) => (
          <HousingCard key={listing.id} {...listing} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Housing;
