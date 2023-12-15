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
import { useNavigation } from "@react-navigation/native";
import Spacing from "../Spacing";

interface ReviewProps {
  review: ReviewType;
  showFullInfo?: boolean;
}

const Review = ({ review, showFullInfo }: ReviewProps) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("ReviewDetail", {
          review,
        })
      }
    >
      <Container>
        <ReviewRow>
          <ProfilePictureRow>
            <ProfileIcon source={review.userIcon} />
          </ProfilePictureRow>
          <CommentSection>
            {showFullInfo == true ? (
              <Typography type="Paragraph" color={COLORS.white}>
                {review.movieTitle}
              </Typography>
            ) : (
              <Spacing height={5} />
            )}
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
          {showFullInfo == true ? (
            <ImageItem source={review.movieBanner} />
          ) : (
            <Spacing width={30} />
          )}
        </ReviewRow>
      </Container>
    </TouchableOpacity>
  );
};

export default Review;
