import React from 'react'
import {
  CommentSection,
  Container,
  ImageItem,
  ProfileIcon,
  ProfilePictureRow,
  ReviewRow,
} from './styles'
import Typography from '../Typography'
import { COLORS } from '../../constants/theme'
import { Image, TouchableOpacity } from 'react-native'
import { Review as ReviewType } from '../../types/Review'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Spacing from '../Spacing'
import { useAuth } from '../../hooks/Auth'

interface ReviewProps {
  review: ReviewType
  showFullInfo?: boolean
  testID?: string
}

const Review = ({ review, showFullInfo, testID }: ReviewProps) => {
  const navigate = useNavigation<NavigationProp<ScreenParamList, 'ReviewDetail'>>()
  const { authUser } = useAuth()
  const defaultAvatar = require('../../assets/icons/user.png')
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate('ReviewDetail', {
          review,
        })
      }
      testID={testID}
    >
      <Container>
        <ReviewRow>
          <ProfilePictureRow>
            <ProfileIcon
              testID='reviewer-avatar'
              source={
                review.reviewer_avatar
                  ? { uri: `data:image/jpeg;base64,${review.reviewer_avatar}` }
                  : defaultAvatar
              }
            />
          </ProfilePictureRow>
          <CommentSection>
            {showFullInfo == true ? (
              <Typography type='Paragraph' color={COLORS.white}>
                {review.movie_title}
              </Typography>
            ) : (
              <Spacing height={5} />
            )}
            <Typography type='Small paragraph' color={COLORS.green}>
              {review.reviewer_name}
            </Typography>
            <Typography type='Small paragraph' color={COLORS.white} textAlign='left'>
              {review.review_text}
            </Typography>
            <TouchableOpacity
              style={{ paddingTop: 60 }}
              onPress={() =>
                navigate.navigate('ReviewDetail', {
                  review,
                })
              }
            >
              <Typography type='Small paragraph' color={COLORS.primaryPurple}>
                Read more
              </Typography>
            </TouchableOpacity>
          </CommentSection>
          {showFullInfo == true ? (
            <ImageItem source={review.movie_poster} />
          ) : (
            <Spacing width={30} />
          )}
        </ReviewRow>
      </Container>
    </TouchableOpacity>
  )
}

export default Review
