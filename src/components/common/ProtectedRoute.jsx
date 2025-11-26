import { AuthContext } from "@/context/AuthContext";
import { useLocation } from "react";
import { useAuth } from "@/hooks";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth(AuthContext);
  const location = useLocation();

  if (loading) return null;
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};
