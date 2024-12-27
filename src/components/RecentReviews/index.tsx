import React from 'react'
import { Review as ReviewType } from '../../types/Review'
import Review from '../Review'
import { Container } from './styles'
import Typography from '../Typography'
import { COLORS } from '../../constants/theme'
import { useTranslation } from 'react-i18next'

interface ReviewList {
  reviews: ReviewType[]
}

const RecentReviews = ({ reviews }: ReviewList) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Typography type='Paragraph' color={COLORS.white}>
        {t('recent_reviews')}
      </Typography>
      {reviews.map((review, index) => (
        <Review testID='review-item' review={review} showFullInfo={true} key={index} />
      ))}
    </Container>
  )
}

export default RecentReviews
