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
      <Typography type="Paragraph" color={COLORS.white}>
        Popular lists this month
      </Typography>
      <PopularList>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={0} />
            <ImageItem source={movie4} rightValue={10} />
            <ImageItem source={movie4} rightValue={20} />
            <ImageItem source={movie4} rightValue={30} />
            <ImageItem source={movie4} rightValue={40} />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="left">
            Super hero movies
          </Typography>
        </ListSection>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={0} />
            <ImageItem source={movie4} rightValue={10} />
            <ImageItem source={movie4} rightValue={20} />
            <ImageItem source={movie4} rightValue={30} />
            <ImageItem source={movie4} rightValue={40} />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="left">
            Super hero movies
          </Typography>
        </ListSection>
        <ListSection>
          <ImageCover>
            <ImageItem source={movie4} rightValue={0} />
            <ImageItem source={movie4} rightValue={10} />
            <ImageItem source={movie4} rightValue={20} />
            <ImageItem source={movie4} rightValue={30} />
            <ImageItem source={movie4} rightValue={40} />
          </ImageCover>
          <TitleContainer>
            <Typography
              type="Menu Title"
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
