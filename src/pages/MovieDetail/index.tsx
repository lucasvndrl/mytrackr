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
import { useTranslation } from 'react-i18next'
import AccessibilityHandler from '../../utils/AccessibilityHandler'

const MovieDetail = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [movie, setMovie] = useState({} as Movie)
  const [movieReviews, setMovieReviews] = useState([] as ReviewType[])
  const navigation = useNavigation<NavigationProp<ScreenParamList, 'ReviewsList' | 'WriteReview'>>()
  const { params } = useRoute<RouteProp<ScreenParamList, 'MovieDetail'>>()
  const { movies, reviews } = useMovies()
  const { t } = useTranslation()

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
      Alert.alert(t('error_recovering_movie_details'))
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
              <AccessibilityHandler
                accessible
                accessibilityLabel={t('acs_add_review_button')}
                accessibilityHint={t('acs_add_review_button_hint')}
              >
                <OptionButton onPress={() => navigation.navigate('WriteReview', { movie: movie })}>
                  <OptionIcon source={require('../../assets/icons/review-icon.png')} />
                  <Typography fontSize={SIZES.large} fontWeight='Semibold' color='black'>
                    {t('rate_or_review_text')}
                  </Typography>
                </OptionButton>
              </AccessibilityHandler>
            </LeftContainer>
            <RightContainer>
              <MovieTitleContainer>
                <AccessibilityHandler accessible>
                  <Typography color={COLORS.white} fontSize={SIZES.large} fontWeight='Bold'>
                    {movie.title}
                  </Typography>
                </AccessibilityHandler>
                <AccessibilityHandler accessible>
                  <Typography color={COLORS.white} fontSize={SIZES.small} fontWeight='Semibold'>
                    {movie.duration} min
                  </Typography>
                </AccessibilityHandler>
              </MovieTitleContainer>
              <DirectorContainer>
                <AccessibilityHandler accessible>
                  <Typography fontSize={SIZES.medium} fontWeight='Semibold'>
                    {t('directed_by_text')}
                  </Typography>
                </AccessibilityHandler>
                <Spacing width={5} />
                <AccessibilityHandler accessible>
                  <Typography fontSize={SIZES.medium} fontWeight='Bold'>
                    {movie.directed_by}
                  </Typography>
                </AccessibilityHandler>
              </DirectorContainer>
              <SummaryContainer>
                <AccessibilityHandler accessible>
                  <Typography fontSize={SIZES.medium} lineHeight={15}>
                    {movie.synopsis}
                  </Typography>
                </AccessibilityHandler>
              </SummaryContainer>
              <Spacing height={20} />
              <RatingsContainer>
                <AccessibilityHandler accessible>
                  <Typography>{t('reviews_text')}</Typography>
                </AccessibilityHandler>
                <Spacing height={10} />
                <AccessibilityHandler accessible>
                  <Typography fontSize={SIZES.xLarge} fontWeight='Regular'>
                    {movie.rating}
                  </Typography>
                </AccessibilityHandler>
                <StarRatingDisplay rating={movie.rating} />
              </RatingsContainer>
            </RightContainer>
          </HeaderView>
          <AllReviewsRow>
            <AccessibilityHandler accessible>
              <Typography fontSize={SIZES.medium} fontWeight='Bold'>
                {t('all_reviews_text')}
              </Typography>
            </AccessibilityHandler>
            <AccessibilityHandler
              accessible
              accessibilityLabel={t('see_all_text')}
              accessibilityHint={t('acs_see_all_text_hint')}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('ReviewsList', { reviews: movieReviews })}
              >
                <Typography fontSize={SIZES.medium} fontWeight='Semibold'>
                  {t('see_all_text')}
                </Typography>
              </TouchableOpacity>
            </AccessibilityHandler>
          </AllReviewsRow>
          <LineItem />
          <ReviewContainer accessible accessibilityLabel={`${t('acs_reviews_for')} ${movie.title}`}>
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
