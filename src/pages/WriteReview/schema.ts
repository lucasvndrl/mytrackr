import { z } from 'zod'
import i18n from '../../../i18n'

const schema = z.object({
  rating: z
    .number()
    .int()
    .refine((value) => value >= 1 && value <= 5, { message: i18n.t('zod_error_rating') }),
  review: z
    .string()
    .min(15, { message: i18n.t('zod_error_review_min') })
    .max(250, {
      message: i18n.t('zod_error_review_max'),
    }),
})

export const writeReviewFormSchema = z.intersection(schema, z.object({}))

export type WriteReviewFormData = z.infer<typeof writeReviewFormSchema>

export const writeReviewFormDefaultValues = {
  rating: 0,
  review: '',
} as WriteReviewFormData
