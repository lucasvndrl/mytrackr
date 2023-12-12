import React from "react";
import {
  Container,
  ImageCover,
  ImageItem,
  ListSection,
  PopularList,
  TitleContainer,
} from "./styles";
import Typography from "../../Typography";
import { COLORS, SIZES } from "../../../constants/theme";
import { Image } from "react-native";

const PopularLists = () => {
  const movie4 = require("../../../assets/images/nowayhome.png");
  const movie1 = require("../../../assets/images/batman.png");
  return (
    <Container>
      <Typography type="Paragraph" color={COLORS.white}>
        Popular lists this month
      </Typography>
      <PopularList>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={15} />
            <ImageItem source={movie4} rightValue={25} />
            <ImageItem source={movie4} rightValue={35} />
            <ImageItem source={movie4} rightValue={45} />
            <ImageItem source={movie4} rightValue={55} />
          </ImageCover>
          <TitleContainer>
            <Typography
              fontSize={SIZES.medium}
              color={COLORS.white}
              textAlign="left"
            >
              Super hero movies
            </Typography>
          </TitleContainer>
        </ListSection>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={15} />
            <ImageItem source={movie4} rightValue={25} />
            <ImageItem source={movie4} rightValue={35} />
            <ImageItem source={movie4} rightValue={45} />
            <ImageItem source={movie4} rightValue={55} />
          </ImageCover>
          <TitleContainer>
            <Typography
              fontSize={SIZES.medium}
              color={COLORS.white}
              textAlign="left"
            >
              Super hero movies
            </Typography>
          </TitleContainer>
        </ListSection>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={15} />
            <ImageItem source={movie4} rightValue={25} />
            <ImageItem source={movie4} rightValue={35} />
            <ImageItem source={movie4} rightValue={45} />
            <ImageItem source={movie4} rightValue={55} />
          </ImageCover>
          <TitleContainer>
            <Typography
              fontSize={SIZES.medium}
              color={COLORS.white}
              textAlign="left"
            >
              Super hero movies
            </Typography>
          </TitleContainer>
        </ListSection>
      </PopularList>
    </Container>
  );
};

export default PopularLists;
