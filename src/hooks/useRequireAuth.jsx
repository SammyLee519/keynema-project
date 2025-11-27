import { useAuth } from "@/hooks";
import { useNavigate, useLocation } from "react-router-dom";

const useRequireAuth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const requireAuth = (callback) => {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    callback();
  };

  return { user, requireAuth };
};

export default useRequireAuth;
