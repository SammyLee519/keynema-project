import { useAuth } from "@/hooks";
import { useWishlist, useReview } from "@/hooks";
import { ReviewItem } from "@/pages";
import { PageContainer, MovieGrid, Typography } from "@/components";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  UserName,
  UserEmail,
  SectionTitle,
  ReviewGrid,
  EmptyState,
} from "./style";

const ProfilePage = () => {
  const { user } = useAuth();
  const { wishlist, loading: wishlistLoading } = useWishlist();
  const { reviews, loading: reviewsLoading } = useReview();

  // 유저 정보
  const displayName = user?.user_metadata?.display_name || "사용자";
  const email = user?.email || "";
  const avatarUrl = user?.user_metadata?.avatar_url || null;

  // 찜한 영화 데이터 변환 (MovieGrid에 맞게)
  const wishlistMovies =
    wishlist?.map((data) => ({
      id: data.movie_id,
      title: data.movie_title,
      poster_path: data.movie_poster,
      vote_average: data.vote_average || 0,
    })) || [];

  return (
    <PageContainer>
      <ProfileContainer>
        {/* 프로필 헤더 */}
        <ProfileHeader>
          <ProfileImage>
            {avatarUrl ? (
              <img src={avatarUrl} alt={displayName} />
            ) : (
              <div className="default-avatar">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </ProfileImage>
          <ProfileInfo>
            <UserName>{displayName}</UserName>
            <UserEmail>{email}</UserEmail>
          </ProfileInfo>
        </ProfileHeader>

        {/* 내가 찜한 영화 */}
        <section>
          <SectionTitle>
            <Typography variant="h2">내가 찜한 영화</Typography>
          </SectionTitle>

          {wishlistLoading ? (
            <EmptyState>로딩 중...</EmptyState>
          ) : wishlistMovies.length > 0 ? (
            <MovieGrid
              movies={wishlistMovies}
              padding="0"
              paddingTablet="0"
              paddingMobile="0"
            />
          ) : (
            <EmptyState>찜한 영화가 없습니다.</EmptyState>
          )}
        </section>

        {/* 내가 쓴 리뷰 */}
        <section>
          <SectionTitle>
            <Typography variant="h2">내가 쓴 리뷰</Typography>
          </SectionTitle>

          {reviewsLoading ? (
            <EmptyState>로딩 중...</EmptyState>
          ) : reviews?.length > 0 ? (
            <ReviewGrid>
              {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </ReviewGrid>
          ) : (
            <EmptyState>작성한 리뷰가 없습니다.</EmptyState>
          )}
        </section>
      </ProfileContainer>
    </PageContainer>
  );
};

export default ProfilePage;
