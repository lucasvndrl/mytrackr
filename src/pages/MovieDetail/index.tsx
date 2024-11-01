import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { LineItem } from '../../components/Line/styles'
import Loading from '../../components/Loading'
import Review from '../../components/Review'
import Spacing from '../../components/Spacing'
import Typography from '../../components/Typography'
import { COLORS, SIZES } from '../../constants/theme'
import { useMovies } from '../../hooks/Movies'
import { Movie } from '../../types/Movie'
import { Review as ReviewType } from '../../types/Review'
import {
  AllReviewsRow,
  Container,
  DirectorContainer,
  HeaderView,
  ImageBanner,
  ImageItem,
  LeftContainer,
  MovieTitleContainer,
  OptionButton,
  OptionIcon,
  RatingsContainer,
  ReviewContainer,
  RightContainer,
  SummaryContainer,
} from './styles'

const MovieDetail = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [movie, setMovie] = useState({} as Movie)
  const [movieReviews, setMovieReviews] = useState([] as ReviewType[])
  const navigation = useNavigation<NavigationProp<ScreenParamList, 'ReviewsList' | 'WriteReview'>>()
  const { params } = useRoute<RouteProp<ScreenParamList, 'MovieDetail'>>()
  const { movies, reviews } = useMovies()

  const getMovieDetails = async (movieId: string) => {
    setLoading(true)
    const movie = movies.find((movie) => movie.movie_id == movieId)
    if (movie) {
      const reviewsByMovieId =
        reviews.filter((review) => review.movie_id == movie.movie_id) ?? ([] as ReviewType[])
      setMovie(movie)
      setMovieReviews(reviewsByMovieId)
    } else {
      setLoading(false)
      Alert.alert('There has been an error recovering movie details')
      navigation.goBack()
    }
    setLoading(false)
  }

  useEffect(() => {
    if (params.movie_id != null) {
      getMovieDetails(params.movie_id)
    }
  }, [])

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageBanner source={movie.poster} />
          <HeaderView>
            <LeftContainer>
              <ImageItem source={movie.poster} />
              <OptionButton onPress={() => navigation.navigate('WriteReview', { movie: movie })}>
                <OptionIcon source={require('../../assets/icons/review-icon.png')} />
                <Typography fontSize={SIZES.large} fontWeight='Semibold' color='black'>
                  Rate or review
                </Typography>
              </OptionButton>
            </LeftContainer>
            <RightContainer>
              <MovieTitleContainer>
                <Typography color={COLORS.white} fontSize={SIZES.large} fontWeight='Bold'>
                  {movie.title}
                </Typography>

                <Typography color={COLORS.white} fontSize={SIZES.small} fontWeight='Semibold'>
                  {movie.duration} min
                </Typography>
              </MovieTitleContainer>
              <DirectorContainer>
                <Typography fontSize={SIZES.medium} fontWeight='Semibold'>
                  Directed by
                </Typography>
                <Spacing width={5} />
                <Typography fontSize={SIZES.medium} fontWeight='Bold'>
                  {movie.directed_by}
                </Typography>
              </DirectorContainer>
              <SummaryContainer>
                <Typography fontSize={SIZES.medium} lineHeight={15}>
                  {movie.synopsis}
                </Typography>
              </SummaryContainer>
              <Spacing height={20} />
              <RatingsContainer>
                <Typography>Ratings</Typography>
                <Spacing height={10} />
                <Typography fontSize={SIZES.xLarge} fontWeight='Regular'>
                  {movie.rating}
                </Typography>
                <StarRatingDisplay rating={movie.rating} />
              </RatingsContainer>
            </RightContainer>
          </HeaderView>
          <AllReviewsRow>
            <Typography fontSize={SIZES.medium} fontWeight='Bold'>
              All Reviews
            </Typography>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewsList', { reviews: movieReviews })}
            >
              <Typography fontSize={SIZES.medium} fontWeight='Semibold'>
                See All
              </Typography>
            </TouchableOpacity>
          </AllReviewsRow>
          <LineItem />
          <ReviewContainer>
            {movieReviews.map((review) => {
              return <Review review={review} showFullInfo={true} key={review.review_id} />
            })}
          </ReviewContainer>
        </>
      )}
    </Container>
  )
}

export default MovieDetail
