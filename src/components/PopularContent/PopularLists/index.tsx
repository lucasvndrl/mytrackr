import React from "react";
import { Container, ImageCover, ListSection, PopularList } from "./styles";
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
            <Image
              source={movie1}
              style={{
                height: 65,
                width: 50,
                borderTopLeftRadius: 10,
              }}
            />
            <Image
              source={movie4}
              style={{
                height: 65,
                width: 50,
                borderTopRightRadius: 10,
              }}
            />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="center">
            Super hero movies
          </Typography>
        </ListSection>
        <ListSection>
          <ImageCover>
            <Image
              source={movie1}
              style={{
                height: 65,
                width: 50,
                borderTopLeftRadius: 10,
              }}
            />
            <Image
              source={movie4}
              style={{
                height: 65,
                width: 50,
                borderTopRightRadius: 10,
              }}
            />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="center">
            Super hero movies
          </Typography>
        </ListSection>
        <ListSection>
          <ImageCover>
            <Image
              source={movie1}
              style={{
                height: 65,
                width: 50,
                borderTopLeftRadius: 10,
              }}
            />
            <Image
              source={movie4}
              style={{
                height: 65,
                width: 50,
                borderTopRightRadius: 10,
              }}
            />
          </ImageCover>
          <Typography type="Menu Title" color={COLORS.white} textAlign="center">
            Super hero movies
          </Typography>
        </ListSection>
      </PopularList>
    </Container>
  );
};

export default PopularLists;
