import React from 'react'
import { Container, ImageItem, MovieList } from './styles'
import Typography from '../../Typography'
import { COLORS } from '../../../constants/theme'
import { TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Movie } from '../../../types/Movie'
import AccessibilityHandler from '../../../utils/AccessibilityHandler'
import { useTranslation } from 'react-i18next'

interface PopularMoviesProps {
  movies: Movie[]
}

const PopularMovies = ({ movies }: PopularMoviesProps) => {
  const navigate = useNavigation<NavigationProp<ScreenParamList, 'MovieDetail'>>()
  const { t } = useTranslation()
  return (
    <Container accessible accessibilityLabel='Popular movies'>
      <Typography type='Paragraph' color={COLORS.white}>
        {t('popular_movies_this_month')}
      </Typography>
      <MovieList>
        {movies.map((movie, index) => (
          <AccessibilityHandler
            accessible
            accessibilityLabel={t('acs_movie_poster_clickable')}
            accessibilityHint={t('acs_movie_poster_clickable_hint')}
            key={index}
          >
            <TouchableOpacity
              testID='button-movie-details'
              onPress={() => navigate.navigate('MovieDetail', { movie_id: movie.movie_id })}
            >
              <ImageItem source={movie.poster} key={movie.movie_id} testID='movie-poster' />
            </TouchableOpacity>
          </AccessibilityHandler>
        ))}
      </MovieList>
    </Container>
  )
}

export default PopularMovies
