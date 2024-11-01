import { z } from 'zod'

const schema = z.object({
  rating: z.number().int().min(1).max(5),
  review: z.string().min(15).max(250, {
    message: 'Review must contain between 15 and 250 characters',
  }),
})

export const writeReviewFormSchema = z.intersection(schema, z.object({}))

export type WriteReviewFormData = z.infer<typeof writeReviewFormSchema>

export const writeReviewFormDefaultValues = {
  rating: 0,
  review: '',
} as WriteReviewFormData
