import { useState } from "react";
import { supabase } from "@/api";
import { useNavigate, useLocation } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate(fronm, { replace: true });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loginWithSocial = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}${from}`,
        },
      });
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    }
  };
  return {
    loading,
    error,
    loginWithEmail,
    loginWithSocial,
  };
};

export default useLogin;
