import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Review as ReviewType } from '../../types/Review'
import { Alert } from 'react-native'
import Review from '../../components/Review'
import { useTranslation } from 'react-i18next'

const ReviewsList = () => {
  const { params } = useRoute<RouteProp<ScreenParamList, 'ReviewsList'>>()
  const [reviews, setReviews] = useState([] as ReviewType[])
  const navigation = useNavigation()
  const { t } = useTranslation()
  useEffect(() => {
    if (params.reviews != null) {
      setReviews(params.reviews)
    } else {
      Alert.alert(t('alert_error_fetching_all_reviews'))
      navigation.goBack()
    }
  }, [])
  return (
    <Container accessible accessibilityLabel={t('acs_reviews_list')}>
      {reviews.map((review) => {
        return <Review review={review} showFullInfo={true} key={review.review_id} />
      })}
    </Container>
  )
}

export default ReviewsList
