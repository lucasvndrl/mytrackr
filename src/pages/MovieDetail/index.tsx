import React from "react";
import { Image, ScrollView, View } from "react-native";
import Typography from "../../components/Typography";
import { ReviewType } from "../../types/Review";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import {
  InfoContainer,
  InfoOptionsButton,
  Container,
  DirectorContainer,
  HeaderView,
  ImageBanner,
  ImageItem,
  LeftContainer,
  MovieTitleContainer,
  OptionButton,
  RateStarsContainer,
  RatingsContainer,
  RightContainer,
  StatsContainer,
  SummaryContainer,
  AllReviewsRow,
  Line,
  ReviewContainer,
} from "./styles";
import StatsIcon from "../../components/Icons/StatsIcon";
import ImageRow from "../../components/ImageRow";
import Review from "../../components/Review";
import { reviews } from "../../mocks/ReviewMocks";
import Spacing from "../../components/Spacing";
import Star from "../../components/Star";
import { LineItem } from "../../components/Line/styles";

const MovieDetail = () => {
  const [infoOption, setInfoOption] = React.useState<string>("Cast");
  const movieBanner = require("../../assets/images/batmanBanner.png");

  return (
    <Container>
      <ImageBanner source={movieBanner} />
      <HeaderView>
        <LeftContainer>
          <ImageItem source={require("../../assets/images/batman.png")} />
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
              style={{
                width: 12,
                height: 12,
                marginRight: 5,
                marginLeft: 10,
              }}
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
              style={{
                width: 12,
                height: 12,
                marginRight: 5,
                marginLeft: 10,
              }}
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
              style={{
                width: 12,
                height: 12,
                marginRight: 5,
                marginLeft: 10,
              }}
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
            <Spacing width={5} />
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
          <Spacing height={20} />
          <RatingsContainer>
            <Typography>Ratings</Typography>
            <Spacing height={10} />
            <Typography fontSize={SIZES.xLarge} fontWeight="Regular">
              4.4
            </Typography>
            <RateStarsContainer>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </RateStarsContainer>
          </RatingsContainer>
        </RightContainer>
      </HeaderView>
      <InfoContainer>
        <InfoOptionsButton
          isActive={infoOption == "Cast" ? true : false}
          onPress={() => setInfoOption("Cast")}
        >
          <Typography fontSize={SIZES.medium} fontWeight="Semibold">
            Cast
          </Typography>
        </InfoOptionsButton>
        <InfoOptionsButton isActive={infoOption == "Crew" ? true : false}>
          <Typography
            fontSize={SIZES.medium}
            fontWeight="Semibold"
            onPress={() => setInfoOption("Crew")}
          >
            Crew
          </Typography>
        </InfoOptionsButton>
        <InfoOptionsButton isActive={infoOption == "Details" ? true : false}>
          <Typography
            fontSize={SIZES.medium}
            fontWeight="Semibold"
            onPress={() => setInfoOption("Details")}
          >
            Details
          </Typography>
        </InfoOptionsButton>
      </InfoContainer>
      {infoOption == "Cast" && <ImageRow option={infoOption} />}
      {infoOption == "Crew" && <ImageRow option={infoOption} />}
      <AllReviewsRow>
        <Typography fontSize={SIZES.medium} fontWeight="Bold">
          All Reviews
        </Typography>
        <Typography fontSize={SIZES.medium} fontWeight="Semibold">
          See All
        </Typography>
      </AllReviewsRow>
      <LineItem />
      <ReviewContainer>
        <Review review={reviews[0]} showFullInfo={false} />
      </ReviewContainer>
    </Container>
  );
};

export default MovieDetail;
