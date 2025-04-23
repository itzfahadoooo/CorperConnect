import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <DotLoader color="#008000" size={60}  />
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
