"use client";

import { ArrowLeft, MapPin, Star, Calendar, Phone, Mail } from "lucide-react";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import house1 from "@/assets/house1.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HousingDetailPage() {
  const params = useParams();
  const id = params.id;

  // This would normally come from an API call using the ID
  const housing = {
    id: id,
    title: "2 Bedroom Apartment near Federal Secretariat",
    description:
      "A spacious 2 bedroom apartment located just 10 minutes walk from the Federal Secretariat. The apartment features 24/7 power supply with inverter backup, water supply, and security. It's perfect for corps members working at the secretariat or nearby offices.",
    location: "Ikeja, Lagos",
    price: 120000,
    rating: 4.8,
    reviews: 12,
    imageUrl: house1,
    verified: true,
    distance: "2.5km from PPA",
    features: [
      "24/7 Power Supply",
      "Water Supply",
      "Security",
      "Furnished",
      "Close to Market",
      "Good Road Network",
    ],
    landlord: {
      name: "Mr. Johnson",
      phone: "+234 800 1234 567",
      email: "johnson@example.com",
    },
    availableFrom: "Immediately",
    images: [house1, house1, house1, house1],
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <Link
          to="/dashboard/housing"
          className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-4"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to listings
        </Link>
        <h1 className="text-2xl font-bold">{housing.title}</h1>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{housing.location}</span>
          {housing.distance && (
            <span className="ml-1">• {housing.distance}</span>
          )}
        </div>
      </div>

      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <img
            src={housing.imageUrl || "/placeholder.svg"}
            alt={housing.title}
            className="object-cover"
          />
          {housing.verified && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-md z-10">
              Verified
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {housing.images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative h-32 rounded-lg overflow-hidden"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${housing.title} - Image ${index + 1}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Details */}
        <div className="lg:col-span-2">
          {/* Price and rating */}
          <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">
                  ₦{housing.price.toLocaleString()}
                </p>
                <p className="text-gray-600">per month</p>
              </div>
              <div className="flex items-center">
                <Star
                  size={18}
                  className="text-yellow-400 fill-yellow-400 mr-1"
                />
                <span className="font-medium">{housing.rating}</span>
                <span className="text-gray-600 ml-1">
                  ({housing.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Description</h2>
            <p className="text-gray-700">{housing.description}</p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <div className="grid grid-cols-2 gap-2">
              {housing.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Location</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <MapPin size={24} className="text-gray-400 mr-2" />
              <span className="text-gray-500">Map view coming soon</span>
            </div>
          </div>
        </div>

        {/* Right column - Contact and booking */}
        <div className="lg:col-span-1">
          {/* Landlord info */}
          <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Landlord Information</h2>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-gray-600 font-medium">MJ</span>
              </div>
              <div>
                <p className="font-medium">{housing.landlord.name}</p>
                <p className="text-sm text-gray-600">Property Owner</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="text-gray-500 mr-2" />
                <span className="text-gray-700">{housing.landlord.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-gray-500 mr-2" />
                <span className="text-gray-700">{housing.landlord.email}</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Availability</h2>
            <div className="flex items-center">
              <Calendar size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                Available from: {housing.availableFrom}
              </span>
            </div>
          </div>

          {/* Contact buttons */}
          <div className="space-y-3">
            <button className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-md font-medium">
              Contact Landlord
            </button>
            <button className="w-full border border-primary text-primary hover:bg-primary-50 py-3 rounded-md font-medium">
              Schedule Viewing
            </button>
            <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-md font-medium">
              Save to Favorites
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
