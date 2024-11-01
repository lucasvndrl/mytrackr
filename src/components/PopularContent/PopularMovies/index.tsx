import React from 'react'
import { Container, ImageItem, MovieList } from './styles'
import Typography from '../../Typography'
import { COLORS } from '../../../constants/theme'
import { TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Movie } from '../../../types/Movie'

interface PopularMoviesProps {
  movies: Movie[]
}

const PopularMovies = ({ movies }: PopularMoviesProps) => {
  const navigate = useNavigation<NavigationProp<ScreenParamList, 'MovieDetail'>>()
  return (
    <Container>
      <Typography type='Paragraph' color={COLORS.white}>
        Popular movies this month
      </Typography>
      <MovieList>
        {movies.map((movie, index) => (
          <TouchableOpacity
            key={index}
            testID='button-movie-details'
            onPress={() => navigate.navigate('MovieDetail', { movie_id: movie.movie_id })}
          >
            <ImageItem source={movie.poster} key={movie.movie_id} testID='movie-poster' />
          </TouchableOpacity>
        ))}
      </MovieList>
    </Container>
  )
}

export default PopularMovies
