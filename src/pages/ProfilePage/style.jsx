import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 40px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .default-avatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: bold;
    color: white;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserName = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

export const SectionTitle = styled.div`
  margin-bottom: 24px;
`;

export const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const ReviewCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ReviewAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
`;

export const ReviewUserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ReviewUserName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 20px;

  .star {
    color: #f5c518;
    font-size: 14px;
  }

  .score {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
`;

export const ReviewContent = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  flex: 1;
`;

export const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ReviewLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);

  .heart {
    color: #ff6b6b;
  }

  .comment {
    margin-left: 8px;
  }
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  margin-bottom: 40px;
`;
