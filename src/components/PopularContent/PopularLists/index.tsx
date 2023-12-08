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
import { COLORS } from "../../../constants/theme";
import { Image } from "react-native";

const PopularLists = () => {
  const movie4 = require("../../../assets/images/nowayhome.png");
  const movie1 = require("../../../assets/images/batman.png");
  return (
    <Container>
      <Typography type="Paragraph" color={COLORS.background}>
        Popular lists this month
      </Typography>
      <PopularList>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={0} />
            <ImageItem source={movie4} rightValue={15} />
            <ImageItem source={movie4} rightValue={25} />
            <ImageItem source={movie4} rightValue={35} />
            <ImageItem source={movie4} rightValue={50} />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="center">
            Super hero movies
          </Typography>
        </ListSection>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={0} />
            <ImageItem source={movie4} rightValue={15} />
            <ImageItem source={movie4} rightValue={25} />
            <ImageItem source={movie4} rightValue={35} />
            <ImageItem source={movie4} rightValue={50} />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="center">
            Super hero movies
          </Typography>
        </ListSection>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={0} />
            <ImageItem source={movie4} rightValue={15} />
            <ImageItem source={movie4} rightValue={25} />
            <ImageItem source={movie4} rightValue={35} />
            <ImageItem source={movie4} rightValue={50} />
          </ImageCover>
          <TitleContainer>
            <Typography
              type="Menu Title"
              color={COLORS.white}
              textAlign="center"
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
