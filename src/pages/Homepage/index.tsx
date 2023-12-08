import React from "react";
import { ScrollView, View } from "react-native";
import Typography from "../../components/Typography";
import { Container, TitleContainer } from "./styles";
import { COLORS } from "../../constants/theme";
import PopularMovies from "../../components/PopularContent/PopularMovies";
import PopularLists from "../../components/PopularContent/PopularLists";
import RecentReviews from "../../components/RecentReviews";

const Homepage = () => {
  const reviews = [
    {
      movieBanner: require("../../assets/images/batman.png"),
      movieTitle: "The Batman (2022)",
      reviewBy: "Review by Geraldo",
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      userIcon: require("../../assets/images/batman.png"),
    },
    {
      movieBanner: require("../../assets/images/batman.png"),
      movieTitle: "The Batman (2022)",
      reviewBy: "Review by Geraldo",
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      userIcon: require("../../assets/images/batman.png"),
    },
    {
      movieBanner: require("../../assets/images/batman.png"),
      movieTitle: "The Batman (2022)",
      reviewBy: "Review by Geraldo",
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      userIcon: require("../../assets/images/batman.png"),
    },
    {
      movieBanner: require("../../assets/images/batman.png"),
      movieTitle: "The Batman (2022)",
      reviewBy: "Review by Geraldo",
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      userIcon: require("../../assets/images/batman.png"),
    },
    {
      movieBanner: require("../../assets/images/batman.png"),
      movieTitle: "The Batman (2022)",
      reviewBy: "Review by Geraldo",
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      userIcon: require("../../assets/images/batman.png"),
    },
  ];
  return (
    <>
      <Container>
        <ScrollView>
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
          <RecentReviews reviews={reviews} />
        </ScrollView>
      </Container>
    </>
  );
};

export default Homepage;
