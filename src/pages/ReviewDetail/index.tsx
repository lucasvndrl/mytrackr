import React from "react";
import { Image, View } from "react-native";
import Typography from "../../components/Typography";
import { ReviewType } from "../../types/Review";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import {
  Container,
  DirectorContainer,
  HeaderView,
  ImageBanner,
  ImageItem,
  LeftContainer,
  MovieTitleContainer,
  OptionButton,
  RightContainer,
  Spacing,
  StatsContainer,
  SummaryContainer,
} from "./styles";
import StatsIcon from "../../components/Icons/StatsIcon";

const ReviewDetail = ({ route }: any) => {
  const review: ReviewType = route.params.review;
  const movieBanner = require("../../assets/images/batmanBanner.png");
  return (
    <Container>
      <ImageBanner source={movieBanner} />
      <HeaderView>
        <LeftContainer>
          <ImageItem source={review.movieBanner} />
          <StatsContainer>
            <StatsIcon
              image={require("../../assets/icons/eye.png")}
              stats="40k"
            />
            <StatsIcon
              image={require("../../assets/icons/heart.png")}
              stats="30k"
            />
            <StatsIcon
              image={require("../../assets/icons/list-check.png")}
              stats="10k"
            />
          </StatsContainer>
          <OptionButton>
            <Image
              source={require("../../assets/icons/review-icon.png")}
              style={{ width: 12, height: 12, marginRight: 5, marginLeft: 10 }}
            />
            <Typography
              fontSize={SIZES.medium}
              fontWeight="Semibold"
              color="black"
            >
              Rate or review
            </Typography>
          </OptionButton>
          <OptionButton>
            <Image
              source={require("../../assets/icons/bookmark.png")}
              style={{ width: 12, height: 12, marginRight: 5, marginLeft: 10 }}
            />
            <Typography
              fontSize={SIZES.medium}
              fontWeight="Semibold"
              color="black"
            >
              Add to list
            </Typography>
          </OptionButton>
          <OptionButton>
            <Image
              source={require("../../assets/icons/play-alt.png")}
              style={{ width: 12, height: 12, marginRight: 5, marginLeft: 10 }}
            />
            <Typography
              fontSize={SIZES.medium}
              fontWeight="Semibold"
              color="black"
            >
              Add to watchlist
            </Typography>
          </OptionButton>
        </LeftContainer>
        <RightContainer>
          <MovieTitleContainer>
            <Typography
              color={COLORS.white}
              fontSize={SIZES.large}
              fontWeight="Bold"
            >
              The Batman
            </Typography>
            <Typography
              color={COLORS.white}
              fontSize={SIZES.medium}
              fontWeight="Semibold"
            >
              2022
            </Typography>
            <Typography
              color={COLORS.white}
              fontSize={SIZES.small}
              fontWeight="Semibold"
            >
              176mins
            </Typography>
          </MovieTitleContainer>
          <DirectorContainer>
            <Typography fontSize={SIZES.small} fontWeight="Semibold">
              Directed by
            </Typography>
            <Spacing />
            <Typography fontSize={SIZES.small} fontWeight="Bold">
              Matt Reeves
            </Typography>
          </DirectorContainer>
          <SummaryContainer>
            <Typography fontSize={SIZES.small} fontWeight="Regular">
              UNMASK THE TRUTH.
            </Typography>
            <Typography fontSize={SIZES.small} lineHeight={15}>
              In his second year of fighting crime, Batman uncovers corruption
              in Gotham City that connects to his own family while facing a
              serial killer known as the Riddler.
            </Typography>
          </SummaryContainer>
        </RightContainer>
      </HeaderView>
    </Container>
  );
};

export default ReviewDetail;
