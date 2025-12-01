import { useAuth, useProfile } from "@/hooks";
import { PageContainer, Typography } from "@/components";
import { WishlistSection, ReviewSection } from "@/pages";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  UserName,
  UserEmail,
  SectionTitle,
} from "./style";

const ProfilePage = () => {
  const { user } = useAuth();
  const { wishlist, reviews, loading, error } = useProfile();

  if (error) throw error;

  // 유저 정보
  const displayName = user?.user_metadata?.display_name || "사용자";
  const email = user?.email || "";
  const avatarUrl = user?.user_metadata?.avatar_url || null;

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
          <WishlistSection wishlist={wishlist} loading={loading} />
        </section>

        {/* 내가 쓴 리뷰 */}
        <section>
          <SectionTitle>
            <Typography variant="h2">내가 쓴 리뷰</Typography>
          </SectionTitle>

          <ReviewSection reviews={reviews} loading={loading} />
        </section>
      </ProfileContainer>
    </PageContainer>
  );
};

export default ProfilePage;
