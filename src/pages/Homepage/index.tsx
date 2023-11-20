import React from "react";
import { View } from "react-native";
import Typography from "../../components/Typography";
import { Container, TitleContainer } from "./styles";
import { COLORS } from "../../constants/theme";
import PopularMovies from "../../components/PopularContent/PopularMovies";
import PopularLists from "../../components/PopularContent/PopularLists";

const Homepage = () => {
  return (
    <Container>
      <TitleContainer>
        <Typography type="Heading 1" color={COLORS.primaryPurple}>
          Hello, User!
        </Typography>
        <Typography type="Small paragraph" color={COLORS.primaryPurple}>
          Welcome to MyTrackr!
        </Typography>
      </TitleContainer>
      <PopularMovies />
      <PopularLists />
    </Container>
  );
};

export default Homepage;
