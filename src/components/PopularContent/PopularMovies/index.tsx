import React from "react";
import { Container, MovieList } from "./styles";
import Typography from "../../Typography";
import { COLORS } from "../../../constants/theme";
import { Image } from "react-native";

const PopularMovies = () => {
  const movie1 = require("../../../assets/images/batman.png");
  const movie2 = require("../../../assets/images/dontlookup.png");
  const movie3 = require("../../../assets/images/frenchdispatch.png");
  const movie4 = require("../../../assets/images/nowayhome.png");
  const movie5 = require("../../../assets/images/thepower.png");
  const movies = [movie1, movie2, movie3, movie4, movie5];
  return (
    <Container>
      <Typography type="Paragraph" color={COLORS.background}>
        Popular movies this month
      </Typography>
      <MovieList>
        {movies.map((movie, index) => (
          <Image
            key={index}
            source={movie}
            style={{
              height: 70,
              width: 50,
              borderRadius: 5,
            }}
          />
        ))}
      </MovieList>
    </Container>
  );
};

export default PopularMovies;
