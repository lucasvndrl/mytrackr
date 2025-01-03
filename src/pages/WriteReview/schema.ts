import { z } from 'zod'
import i18n from '../../../i18n'

const getValidationErrorMessages = () => {
  return {
    ratingError: i18n.isInitialized
      ? i18n.t('zod_error_rating')
      : 'Rating must be an integer between 1 and 5.',
    reviewMinError: i18n.isInitialized
      ? i18n.t('zod_error_review_min')
      : 'Review must be at least 15 characters.',
    reviewMaxError: i18n.isInitialized
      ? i18n.t('zod_error_review_max')
      : 'Review must not exceed 250 characters.',
  }
}

const getSchema = () => {
  const validationErrorMessages = getValidationErrorMessages()

  return z.object({
    rating: z
      .number()
      .int()
      .refine((value) => value >= 1 && value <= 5, {
        message: validationErrorMessages.ratingError,
      }),
    review: z
      .string()
      .min(15, {
        message: validationErrorMessages.reviewMinError,
      })
      .max(250, {
        message: validationErrorMessages.reviewMaxError,
      }),
  })
}

export const createWriteReviewFormSchema = () => getSchema()

const writeReviewFormSchema = getSchema()

export type WriteReviewFormData = z.infer<typeof writeReviewFormSchema>

export const getWriteReviewFormDefaultValues = (): WriteReviewFormData => {
  return {
    rating: 0,
    review: '',
  }
}
