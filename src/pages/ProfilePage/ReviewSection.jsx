import { EmptyState, ReviewGrid } from "./style";
import { ReviewItem } from "@/pages";

const ReviewSection = (reviews, loading) => {
  if (loading) {
    return <EmptyState>로딩 중...</EmptyState>;
  }

  if (!reviews?.length) {
    return <EmptyState>작성한 리뷰가 없습니다.</EmptyState>;
  }

  return (
    <ReviewGrid>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ReviewGrid>
  );
};

export default ReviewSection;
