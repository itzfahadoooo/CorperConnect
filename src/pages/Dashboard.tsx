// src/pages/dashboard.tsx
import { useAuth } from "@/contexts/AuthContext";
import { logout } from "@/firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Welcome, {user?.email}</h1>
      <button onClick={handleLogout} className="bg-gray-800 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
