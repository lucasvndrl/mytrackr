import React from "react";
import { Container, ImageItem, MovieList } from "./styles";
import Typography from "../../Typography";
import { COLORS } from "../../../constants/theme";
import { movies } from "../../../mocks/MoviesMock";

const PopularMovies = () => {
  return (
    <Container>
      <Typography type="Paragraph" color={COLORS.white}>
        Popular movies this month
      </Typography>
      <MovieList>
        {movies.map((movie, index) => (
          <ImageItem source={movie} key={index} />
        ))}
      </MovieList>
    </Container>
  );
};

export default PopularMovies;
