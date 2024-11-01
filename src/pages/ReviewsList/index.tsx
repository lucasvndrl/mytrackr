import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Review as ReviewType } from '../../types/Review'
import { Alert } from 'react-native'
import Review from '../../components/Review'

const ReviewsList = () => {
  const { params } = useRoute<RouteProp<ScreenParamList, 'ReviewsList'>>()
  const [reviews, setReviews] = useState([] as ReviewType[])
  const navigation = useNavigation()
  useEffect(() => {
    if (params.reviews != null) {
      setReviews(params.reviews)
    } else {
      Alert.alert('There has been an error recovering reviews')
      navigation.goBack()
    }
  }, [])
  return (
    <Container>
      {reviews.map((review) => {
        return <Review review={review} showFullInfo={true} key={review.review_id} />
      })}
    </Container>
  )
}

export default ReviewsList
