import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
