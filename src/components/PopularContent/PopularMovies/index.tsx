import React from "react";
import { Container, ImageItem, MovieList } from "./styles";
import Typography from "../../Typography";
import { COLORS } from "../../../constants/theme";
import { movies } from "../../../mocks/MoviesMock";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PopularMovies = () => {
  const navigate = useNavigation();
  return (
    <Container>
      <Typography type="Paragraph" color={COLORS.white}>
        Popular movies this month
      </Typography>
      <MovieList>
        {movies.map((movie, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigate.navigate("MovieDetail" as never)}
          >
            <ImageItem source={movie} key={index} />
          </TouchableOpacity>
        ))}
      </MovieList>
    </Container>
  );
};

export default PopularMovies;
