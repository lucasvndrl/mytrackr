import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { LineItem } from '../../components/Line/styles'
import Spacing from '../../components/Spacing'
import Typography from '../../components/Typography'
import { SIZES } from '../../constants/theme'
import { Review } from '../../types/Review'
import {
  Container,
  ContentContainer,
  ImageItem,
  MovieCoverContainer,
  MovieTitleRow,
  ProfileIcon,
  ProfileName,
  ReviewContainer,
} from './styles'
import { useTranslation } from 'react-i18next'

const ReviewDetail = () => {
  const { params } = useRoute<RouteProp<ScreenParamList, 'ReviewDetail'>>()
  const [review, setReview] = useState<Review>({} as Review)
  const navigation = useNavigation()
  const defaultAvatar = require('../../assets/icons/user.png')
  const defaultPoster = require('../../assets/images/default-movie.png')
  const { t } = useTranslation()
  useEffect(() => {
    if (params.review != null) {
      setReview(params.review)
    } else {
      Alert.alert(t('alert_error_fetching_reviews'))
      navigation.goBack()
    }
  }, [])

  return (
    <Container>
      <ReviewContainer>
        <ContentContainer>
          <ProfileName>
            <ProfileIcon
              source={
                review.reviewer_avatar
                  ? { uri: `data:image/jpeg;base64,${review.reviewer_avatar}` }
                  : defaultAvatar
              }
            />
            <Typography fontSize={SIZES.large}>{review.reviewer_name}</Typography>
          </ProfileName>
          <MovieTitleRow>
            <Typography fontSize={SIZES.large} fontWeight='Bold'>
              {review.movie_title}
            </Typography>
          </MovieTitleRow>
          <StarRatingDisplay rating={review.rating} />
          <Spacing height={5} />
          {/* <Typography fontSize={SIZES.medium}>{}</Typography> */}
          <Spacing height={5} />
          <Typography fontSize={SIZES.medium} lineHeight={12}>
            {review.review_text}
          </Typography>
        </ContentContainer>
        <MovieCoverContainer>
          <ImageItem source={review.movie_poster ? review.movie_poster : defaultPoster} />
        </MovieCoverContainer>
      </ReviewContainer>
      <Spacing height={10} />
      <LineItem />
    </Container>
  )
}

export default ReviewDetail
