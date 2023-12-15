import React from "react";
import {
  Container,
  ContentContainer,
  ImageBanner,
  ImageBannerContainer,
  ImageItem,
  LikeItem,
  LikesRow,
  MovieCoverContainer,
  MovieTitleRow,
  ProfileIcon,
  ProfileName,
  ReviewContainer,
  StarsRow,
} from "./styles";
import Typography from "../../components/Typography";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../../constants/theme";
import { Image } from "react-native";
import Star from "../../components/Star";
import Spacing from "../../components/Spacing";
import { LineItem } from "../../components/Line/styles";

const ReviewDetail = () => {
  return (
    <Container>
      <ReviewContainer>
        <ContentContainer>
          <ProfileName>
            <ProfileIcon source={require("../../assets/images/batman.png")} />
            <Typography fontSize={SIZES.small}>Nome do usuário</Typography>
          </ProfileName>
          <MovieTitleRow>
            <Typography fontSize={SIZES.large} fontWeight="Bold">
              Título do filme
            </Typography>
          </MovieTitleRow>
          <StarsRow>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </StarsRow>
          <Spacing height={5} />
          <Typography fontSize={SIZES.small}>
            Watched 23 de novembro de 2023
          </Typography>
          <Spacing height={5} />
          <Typography fontSize={SIZES.medium} lineHeight={12}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
          <LikesRow>
            <LikeItem source={require("../../assets/icons/hollow-heart.png")} />
            <Typography fontSize={SIZES.small} fontWeight="Bold">
              LIKES ?
            </Typography>
            <Spacing width={5} />
            <Typography fontSize={SIZES.small}>5.280 likes</Typography>
          </LikesRow>
        </ContentContainer>
        <MovieCoverContainer>
          <ImageItem source={require("../../assets/images/batman.png")} />
        </MovieCoverContainer>
      </ReviewContainer>
      <Spacing height={10} />
      <LineItem />
    </Container>
  );
};

export default ReviewDetail;
