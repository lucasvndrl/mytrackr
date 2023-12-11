import React from "react";
import { ScrollView, View } from "react-native";
import Typography from "../../components/Typography";
import { Container, TitleContainer } from "./styles";
import { COLORS } from "../../constants/theme";
import PopularMovies from "../../components/PopularContent/PopularMovies";
import PopularLists from "../../components/PopularContent/PopularLists";
import RecentReviews from "../../components/RecentReviews";
import { reviews } from "../../mocks/ReviewMocks";

const Homepage = () => {
  
  return (
    <>
      <Container>
        <ScrollView>
          <TitleContainer>
            <Typography type="Heading 1" color={COLORS.white}>
              Hello, User!
            </Typography>
            <Typography type="Small paragraph" color={COLORS.white}>
              Welcome to MyTrackr!
            </Typography>
          </TitleContainer>
          <PopularMovies />
          <PopularLists />
          <RecentReviews reviews={reviews} />
        </ScrollView>
      </Container>
    </>
  );
};

export default Homepage;
