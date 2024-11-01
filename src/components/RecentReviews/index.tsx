import React from 'react'
import { Review as ReviewType } from '../../types/Review'
import Review from '../Review'
import { Container } from './styles'
import Typography from '../Typography'
import { COLORS } from '../../constants/theme'

interface ReviewList {
  reviews: ReviewType[]
}

const RecentReviews = ({ reviews }: ReviewList) => {
  return (
    <Container>
      <Typography type='Paragraph' color={COLORS.white}>
        Recent Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Review testID='review-item' review={review} showFullInfo={true} key={index} />
      ))}
    </Container>
  )
}

export default RecentReviews
