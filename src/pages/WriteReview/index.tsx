import React, { useState } from 'react'
import { User } from '../../types/User'
import {
  Button,
  ButtonContainer,
  Container,
  HeaderView,
  ImageItem,
  LeftContainer,
  MovieTitleContainer,
  RightContainer,
  StatsContainer,
} from './styles'
import Typography from '../../components/Typography'
import { COLORS, SIZES } from '../../constants/theme'
import { View } from 'react-native'
import { Movie } from '../../types/Movie'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import StarRating from 'react-native-star-rating-widget'
import { UseFormReturn, useForm } from 'react-hook-form'
import { WriteReviewFormData, writeReviewFormDefaultValues, writeReviewFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import TextInput from '../../components/TextInput'
import StarRatingInput from '../../components/StarRatingComponent'
import { CreateReviewDTO, createReview } from '../../services/reviewsService'
import { useAuth0 } from 'react-native-auth0'
import { useAuth } from '../../hooks/Auth'
import { ActivityIndicator } from 'react-native-paper'
import CustomModal from '../../components/CustomModal'
import { messages } from '../../constants/messages'
import { useTranslation } from 'react-i18next'
import AccessibilityHandler from '../../utils/AccessibilityHandler'

const WriteReview = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const { params } = useRoute<RouteProp<ScreenParamList, 'WriteReview'>>()
  const { t } = useTranslation()
  const movie: Movie = params.movie ?? ({} as Movie)
  const form = useForm<WriteReviewFormData>({
    defaultValues: writeReviewFormDefaultValues,
    resolver: zodResolver(writeReviewFormSchema),
  })
  const { getCredentials } = useAuth0()
  const { authUser } = useAuth()
  const navigation = useNavigation()

  const onSubmit = async (data: WriteReviewFormData) => {
    setIsLoading(true)
    const token = await getCredentials().then((res) => res?.accessToken)
    if (token) {
      const reviewDTO = {
        movie_id: movie.movie_id,
        rating: data.rating,
        review_text: data.review,
        reviewer: authUser.userId,
      } as CreateReviewDTO
      const response = await createReview(reviewDTO, token)
      if (response.status === 201) {
        setIsLoading(false)
        setShowModal(true)
      } else {
        setIsLoading(false)
        setError(true)
        setShowModal(true)
      }
    }
  }

  const closeModalAndRedirect = () => {
    setShowModal(false)
    navigation.navigate('Homepage' as never)
  }

  return (
    <Container>
      {showModal && (
        <CustomModal
          buttonMessage={t('review_response_button')}
          message={error ? t('review_not_created_error') : t('review_created_successfully_msg')}
          title={
            error ? t('review_not_created_error_title') : t('review_created_successfully_title')
          }
          openModal={showModal}
          onCloseModal={() => (error ? setShowModal(false) : closeModalAndRedirect())}
        />
      )}
      <HeaderView>
        <LeftContainer accessible accessibilityLabel={t('acs_write_review_left_container')}>
          <MovieTitleContainer>
            <AccessibilityHandler accessible>
              <Typography color={COLORS.white} fontSize={SIZES.large} fontWeight='Bold'>
                {movie.title}
              </Typography>
            </AccessibilityHandler>
            <AccessibilityHandler accessible>
              <Typography color={COLORS.white} fontSize={SIZES.medium} fontWeight='Semibold'>
                {movie.directed_by}
              </Typography>
            </AccessibilityHandler>
            <AccessibilityHandler accessible>
              <Typography color={COLORS.white} fontSize={SIZES.medium} fontWeight='Semibold'>
                {movie.duration}mins
              </Typography>
            </AccessibilityHandler>
          </MovieTitleContainer>
          <StatsContainer accessible accessibilityLabel={t('acs_movie_rating')}>
            <StarRatingInput form={form} name='rating' starSize={30} />
          </StatsContainer>
        </LeftContainer>
        <RightContainer>
          <AccessibilityHandler accessible accessibilityLabel={t('acs_movie_poster')}>
            <ImageItem source={movie.poster} />
          </AccessibilityHandler>
        </RightContainer>
      </HeaderView>
      <View
        accessible
        accessibilityLabel={t('acs_write_review_text_input')}
        style={{
          padding: 20,
        }}
      >
        <TextInput
          form={form}
          label='Review'
          name='review'
          multiline={true}
          maxLength={250}
          numberOfLines={20}
          placeholder={t('write_down_review_placeholder')}
        />
      </View>
      <ButtonContainer accessible accessibilityLabel={t('acs_submit_review_button')}>
        <Button onPress={form.handleSubmit(onSubmit)}>
          <Typography color={COLORS.white} fontSize={SIZES.xLarge} fontWeight='Bold'>
            {isLoading ? <ActivityIndicator /> : t('done_message')}
          </Typography>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default WriteReview
