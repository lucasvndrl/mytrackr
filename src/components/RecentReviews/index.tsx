import React from "react";
import { ReviewType } from "../../types/Review";
import Review from "../Review";
import { Container } from "./styles";
import Typography from "../Typography";
import { COLORS } from "../../constants/theme";

interface ReviewList {
  reviews: ReviewType[];
}

const RecentReviews = ({ reviews }: ReviewList) => {
  return (
    <Container>
      <Typography type="Paragraph" color={COLORS.white}>
        Recent Friend's Review
      </Typography>
      {reviews.map((review, index) => (
        <Review
          movieBanner={review.movieBanner}
          movieTitle={review.movieTitle}
          reviewBy={review.reviewBy}
          reviewText={review.reviewText}
          userIcon={review.userIcon}
          key={index}
        />
      ))}
    </Container>
  );
};

export default RecentReviews;
