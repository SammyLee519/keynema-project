import { useAuth } from "@/hooks";
import { useNavigation, useLocation } from "react-router-dom";

const useRequireAuth = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const location = useLocation();

  const requireAuth = (callback) => {
    if (!user) {
      navigation("/login", { state: { from: location.pathname } });
      return;
    }
    callback();
  };

  return { user, requireAuth };
};

export default useRequireAuth;
