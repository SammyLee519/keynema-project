import { supabase } from "@/api/supabase";
import { useAuth } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

const useProfile = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      const [wishlistResult, reviewResult] = await Promise.all([
        supabase
          .from("wishlist")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false }),
        supabase
          .from("reviews")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false }),
      ]);

      if (wishlistResult.error) throw wishlistResult.error;
      if (reviewResult.error) throw reviewResult.error;

      return {
        wishlist: wishlistResult.data || [],
        reviews: reviewResult.data || [],
      };
    },
    enabled: !!user, // user가 있을때만 실행
  });

  return {
    wishlist: data?.wishlist || [],
    reviews: data?.reviews || [],
    loading: isLoading,
    error,
  };
};

export default useProfile;
