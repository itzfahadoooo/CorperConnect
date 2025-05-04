import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Building, MapPin, MessageSquare, Users } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import HousingCard from "../../components/dashboard/HousingCard";
import ActivityCard from "../../components/dashboard/ActivityCard";
import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";
import house3 from "@/assets/house3.jpg";
import pro1 from "@/assets/profile1.png";
import pro2 from "@/assets/profile2.png";
import pro3 from "@/assets/profile3.png";
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { getUserDetails, UserDetails } from "@/services/userService";
import { DotLoader } from "react-spinners";

const Dashboard = () => {
  const { user } = useAuth();
  const location = useLocation(); // Get the current route
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      title: "Shared 3 Bedroom Flat with Corps Members",
      location: "GRA, Port Harcourt",
      price: 65000,
      rating: 4.2,
      imageUrl: house3,
      verified: false,
    },
  ];

  const recentActivities = [
    {
      avatar: pro1,
      name: "Chioma Okafor",
      action: "posted a new housing review",
      time: "2 hours ago",
      content:
        "The apartment is very close to the local government secretariat and has good security.",
    },
    {
      avatar: pro2,
      name: "Emmanuel Adebayo",
      action: "asked a question about your area",
      time: "Yesterday",
      content:
        "Is there any reliable transport from Surulere to Ikeja in the early morning?",
    },
    {
      avatar: pro3,
      name: "Fatima Ibrahim",
      action: "added a new housing listing",
      time: "2 days ago",
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
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back,{" "}
            {userData?.name || user?.displayName || user?.email || "Corper"}!
            Here's what's happening in your area.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Available Housing"
            value={42}
            icon={Building}
            trend={{ value: "8%", isPositive: true }}
          />
          <StatCard
            title="Corps Members Nearby"
            value={156}
            icon={Users}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
            trend={{ value: "12%", isPositive: true }}
          />
          <StatCard
            title="Local Communities"
            value={8}
            icon={MapPin}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
          />
          <StatCard
            title="Unread Messages"
            value={5}
            icon={MessageSquare}
            iconColor="text-amber-600"
            iconBgColor="bg-amber-100"
          />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Housing listings */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recommended Housing</h2>
              <a
                href="/dashboard/housing"
                className="text-sm text-emerald-600 hover:underline"
              >
                View all
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {housingListings.map((listing) => (
                <HousingCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>
          

          {/* Activity feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="px-4 py-3 border-b">
                <h2 className="font-semibold">Recent Activity</h2>
              </div>

              <div className="p-4">
                {recentActivities.map((activity, index) => (
                  <ActivityCard key={index} {...activity} />
                ))}

                <a
                  href="/dashboard/community"
                  className="block text-center text-sm text-emerald-600 hover:underline mt-4"
                >
                  View all activity
                </a>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Render child routes for other paths (e.g., "/dashboard/housing")
  return <Outlet />;
};

export default Dashboard;
