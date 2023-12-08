import React from "react";
import {
  CommentSection,
  Container,
  ImageItem,
  ProfileIcon,
  ProfilePictureRow,
  ReviewRow,
} from "./styles";
import Typography from "../Typography";
import { COLORS } from "../../constants/theme";
import { Image, TouchableOpacity } from "react-native";
import { ReviewType } from "../../types/Review";

const Review = (review: ReviewType) => {
  return (
    <Container>
      <ReviewRow>
        <ProfilePictureRow>
          <ProfileIcon source={review.userIcon} />
        </ProfilePictureRow>
        <CommentSection>
          <Typography type="Paragraph" color={COLORS.white}>
            {review.movieTitle}
          </Typography>
          <Typography type="Small paragraph" color={COLORS.green}>
            {review.reviewBy}
          </Typography>
          <Typography
            type="Small paragraph"
            color={COLORS.white}
            textAlign="left"
          >
            {review.reviewText}
          </Typography>
          <TouchableOpacity>
            <Typography type="Small paragraph" color={COLORS.primaryPurple}>
              Read more
            </Typography>
          </TouchableOpacity>
        </CommentSection>
        <ImageItem source={review.movieBanner} />
      </ReviewRow>
    </Container>
  );
};

export default Review;
