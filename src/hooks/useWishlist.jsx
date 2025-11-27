import { useEffect, useState } from "react";
import { supabase } from "@/api/supabase";
import { useAuth, useRequireAuth } from "@/hooks";
import { showToast } from "@/utils";

const useWishlist = (movieId) => {
  const { user } = useAuth();
  const { requireAuth } = useRequireAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 찜 상태 확인
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // movieId 있으면 해당 영화만, 없으면 전체 목록
        if (movieId) {
          const { data, error } = await supabase
            .from("wishlist")
            .select("id")
            .eq("user_id", user.id)
            .eq("movie_id", movieId)
            .maybeSingle();

          if (error) throw error;
          setIsWishlisted(!!data);
        } else {
          const { data, error } = await supabase
            .from("wishlist")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false });

          if (error) throw error;
          setWishlist(data || []);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [user, movieId]);

  // 찜 추가
  const addToWishlist = async (movieData) => {
    if (!user) {
      showToast.warning("로그인이 필요합니다.");
      return false;
    }

    setSaving(true);

    try {
      const wishlistData = {
        user_id: user.id,
        movie_id: movieData.id,
        movie_title: movieData.title,
        movie_poster: movieData.poster_path,
        movie_overview: movieData.overview,
        movie_release_date: movieData.release_date,
        movie_vote_average: movieData.vote_average,
      };

      const { error } = await supabase.from("wishlist").insert(wishlistData);

      if (error) throw error;

      setIsWishlisted(true);
      return true;
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      showToast.error("찜 추가에 실패했습니다.");
      return false;
    } finally {
      setSaving(false);
    }
  };

  // 찜 제거
  const removeFromWishlist = async () => {
    if (!user) return false;

    setSaving(true);

    try {
      const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("movie_id", movieId);

      if (error) throw error;

      setIsWishlisted(false);
      return true;
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      showToast.error("찜 제거에 실패했습니다.");
      return false;
    } finally {
      setSaving(false);
    }
  };

  // 토글 (추가 & 제거)
  const toggleWishlist = async (movieData) => {
    if (!user) {
      requireAuth(() => {});
      return false;
    }

    if (isWishlisted) {
      return await removeFromWishlist();
    } else {
      return await addToWishlist(movieData);
    }
  };

  return {
    isWishlisted,
    wishlist,
    loading,
    saving,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
  };
};

export default useWishlist;
