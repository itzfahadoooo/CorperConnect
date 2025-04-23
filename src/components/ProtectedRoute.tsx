import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
