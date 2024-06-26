import { z } from 'zod'
import { User } from '../../../types/User'
import { defaultGenresValues } from './defaultGenresValues'

const itemPropsSchema = z.object({
  selected: z.boolean(),
  id: z.number(),
  name: z.string(),
})

const schema = z.object({
  avatar: z.string().optional(),
  username: z.string().min(5).max(20, {
    message: 'Username must be between 5 and 20 characters',
  }),
  favorite_genres: z
    .array(itemPropsSchema)
    .refine((value) => value.some((genre) => genre.selected), {
      message: 'You must select at least one genre',
    }),
})

export const userFormSchema = z.intersection(schema, z.object({}))

export type UserFormData = z.infer<typeof userFormSchema>

export const getUserFormDefaultValues = (user?: Partial<User>): Partial<UserFormData> => {
  return {
    avatar: user?.avatar ?? '',
    username: user?.username ?? '',
    favorite_genres: user?.favorites_genres ?? defaultGenresValues,
  } as UserFormData
}
