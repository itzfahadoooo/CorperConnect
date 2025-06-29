"use client";

import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { MapPin, Users, Lightbulb, Calendar, Bell } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import HousingCard from "../../components/dashboard/HousingCard";
import ActivityCard from "../../components/dashboard/ActivityCard";
import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";
import pro1 from "@/assets/profile1.png";
import pro2 from "@/assets/profile2.png";
import pro3 from "@/assets/profile3.png";
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { getUserDetails, type UserDetails } from "@/services/userService";
import { DotLoader } from "react-spinners";

const Dashboard = () => {
  const { user } = useAuth();
  const location = useLocation(); // Get the current route
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock data for survival tips
  const survivalTips = [
    {
      id: "1",
      title: "Getting Around in Lagos",
      author: "Chioma Okafor",
      content:
        "Use the BRT buses for longer distances - they're cheaper and avoid traffic with dedicated lanes.",
      likes: 42,
      category: "Transportation",
    },
    {
      id: "2",
      title: "PPA First Day Tips",
      author: "Emmanuel Adebayo",
      content:
        "Arrive 30 minutes early and bring all your NYSC documents in a folder for a great first impression.",
      likes: 38,
      category: "Work",
    },
    {
      id: "3",
      title: "Monthly Clearance Hack",
      author: "Fatima Ibrahim",
      content:
        "Set a calendar reminder 2 days before clearance day and prepare your CDS attendance sheet in advance.",
      likes: 56,
      category: "NYSC Admin",
    },
  ];

  // Mock data for nearby corps members
  const nearbyCorpers = [
    {
      id: "1",
      name: "Chioma Okafor",
      avatar: pro1,
      distance: "1.2km away",
      batch: "2023 Batch A",
      ppa: "Ministry of Education",
    },
    {
      id: "2",
      name: "Emmanuel Adebayo",
      avatar: pro2,
      distance: "3.5km away",
      batch: "2023 Batch A",
      ppa: "General Hospital",
    },
    {
      id: "3",
      name: "Fatima Ibrahim",
      avatar: pro3,
      distance: "2.8km away",
      batch: "2023 Batch B",
      ppa: "Local Government Secretariat",
    },
  ];

  // Keep the housing listings but we'll display fewer of them
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
  ];

  const recentActivities = [
    {
      avatar: pro1,
      name: "Chioma Okafor",
      action: "shared a survival tip",
      time: "2 hours ago",
      content:
        "Found an affordable restaurant near the secretariat that gives discount to corps members!",
    },
    {
      avatar: pro2,
      name: "Emmanuel Adebayo",
      action: "asked a question about CDS",
      time: "Yesterday",
      content:
        "Does anyone know if the Environmental CDS group is still accepting new members?",
    },
    {
      avatar: pro3,
      name: "Fatima Ibrahim",
      action: "posted about an NYSC event",
      time: "2 days ago",
      content:
        "There's a skills acquisition workshop next week at the secretariat. Registration is free!",
    },
    {
      avatar: pro2,
      name: "David Okonkwo",
      action: "replied to your comment",
      time: "3 days ago",
      content:
        "Yes, there's a good restaurant near the NYSC office that serves local food at affordable prices.",
    },
  ];

  // Upcoming NYSC events
  const upcomingEvents = [
    {
      id: "1",
      title: "Monthly Clearance",
      date: "May 25, 2023",
      location: "NYSC Secretariat",
      type: "Required",
    },
    {
      id: "2",
      title: "CDS Meeting",
      date: "May 18, 2023",
      location: "Community Hall",
      type: "Required",
    },
    {
      id: "3",
      title: "Skills Acquisition",
      date: "May 30, 2023",
      location: "NYSC Multipurpose Hall",
      type: "Optional",
    },
  ];

  useEffect(() => {
    // Check if the user is logged in
    const user = auth.currentUser;

    if (user) {
      getUserDetails(user.uid)
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <DotLoader color="#008000" size={60} />
      </div>
    );
  }
  

  // Render the main dashboard content only for the base "/dashboard" route
  if (location.pathname === "/dashboard") {
    return (
      <DashboardLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Your NYSC Journey</h1>
          <p className="text-gray-600">
            Welcome back,{" "}
            {userData?.name || user?.displayName || user?.email || "Corper"}!
            Connect, survive, and thrive in your service year.{" "}
            <span>
              <Link
                to="/dashboard/onboarding"
                className="text-sm text-emerald-600 hover:underline"
              >
                Complete Your User Profile
              </Link>
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Corps Members Nearby"
            value={156}
            icon={Users}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
            trend={{ value: "12%", isPositive: true }}
          />
          <StatCard
            title="Survival Tips"
            value={85}
            icon={Lightbulb}
            iconColor="text-amber-600"
            iconBgColor="bg-amber-100"
            trend={{ value: "5%", isPositive: true }}
          />
          <StatCard
            title="NYSC Communities"
            value={8}
            icon={MapPin}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
          />
          <StatCard
            title="Upcoming Events"
            value={3}
            icon={Calendar}
            iconColor="text-emerald-600"
            iconBgColor="bg-emerald-100"
          />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Survival Tips and Nearby Corpers */}
          <div className="lg:col-span-2">
            {/* Nearby Corps Members Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Nearby Corps Members</h2>
                <Link
                  to="/dashboard/corpers"
                  className="text-sm text-emerald-600 hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nearbyCorpers.map((corper) => (
                  <div
                    key={corper.id}
                    className="bg-white rounded-lg border shadow-sm p-4 flex flex-col items-center"
                  >
                    <img
                      src={corper.avatar || "/placeholder.svg"}
                      alt={corper.name}
                      className="w-16 h-16 rounded-full mb-2"
                    />
                    <h3 className="font-medium text-center">{corper.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">{corper.batch}</p>
                    <p className="text-xs text-gray-600 mb-2">{corper.ppa}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                      {corper.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Survival Tips Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Your Survival Tips</h2>
                <Link
                  to="/dashboard/tips"
                  className="text-sm text-emerald-600 hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
                {survivalTips.map((tip) => (
                  <div
                    key={tip.id}
                    className="mb-4 pb-4 border-b last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        {tip.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Lightbulb className="h-3 w-3 mr-1" /> {tip.likes} found
                        helpful
                      </span>
                    </div>
                    <h3 className="font-medium mt-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{tip.content}</p>
                    <div className="text-xs text-gray-500 mt-2">
                      Shared by {tip.author}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Housing Section - Now smaller and lower priority */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Available Housing</h2>
                <Link
                  to="/dashboard/housing"
                  className="text-sm text-emerald-600 hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {housingListings.map((listing) => (
                  <HousingCard key={listing.id} {...listing} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Activity feed and Events */}
          <div className="lg:col-span-1">
            {/* Upcoming Events Section */}
            <div className="bg-white rounded-lg border shadow-sm mb-6">
              <div className="px-4 py-3 border-b flex justify-between items-center">
                <h2 className="font-semibold">Upcoming NYSC Events</h2>
                <Bell className="h-4 w-4 text-emerald-600" />
              </div>

              <div className="p-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="mb-4 pb-4 border-b last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium">{event.title}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          event.type === "Required"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <Calendar className="h-3 w-3 mr-1" /> {event.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> {event.location}
                    </div>
                  </div>
                ))}

                <Link
                  to="/dashboard/events"
                  className="block text-center text-sm text-emerald-600 hover:underline mt-4"
                >
                  View all events
                </Link>
              </div>
            </div>

            {/* Activity feed */}
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="px-4 py-3 border-b">
                <h2 className="font-semibold">Community Activity</h2>
              </div>

              <div className="p-4">
                {recentActivities.map((activity, index) => (
                  <ActivityCard key={index} {...activity} />
                ))}

                <Link
                  to="/dashboard/community"
                  className="block text-center text-sm text-emerald-600 hover:underline mt-4"
                >
                  View all activity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Render child routes for other paths (e.g., "/dashboard/housing")\
  return <Outlet />;
};

export default Dashboard;
