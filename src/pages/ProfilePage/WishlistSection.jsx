import { MovieGrid } from "@/components";
import { EmptyState } from "./style";

const WishlistSection = ({ wishlist, loading }) => {
  // 찜한 영화 데이터 변환 (MovieGrid에 맞게)
  const wishlistMovies =
    wishlist?.map((data) => ({
      id: data.movie_id,
      title: data.movie_title,
      poster_path: data.movie_poster,
      vote_average: data.vote_average || 0,
    })) || [];

  if (loading) {
    return <EmptyState>로딩중...</EmptyState>;
  }

  if (wishlistMovies.length === 0) {
    return <EmptyState>찜한 영화가 없습니다.</EmptyState>;
  }

  return (
    <MovieGrid
      movies={wishlistMovies}
      padding="0"
      paddingTablet="0"
      paddingMobile="0"
    />
  );
};
export default WishlistSection;
