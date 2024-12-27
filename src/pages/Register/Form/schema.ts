import { z } from 'zod'
import { User } from '../../../types/User'
import { defaultGenresValues } from './defaultGenresValues'
import i18n from '../../../../i18n'

const itemPropsSchema = z.object({
  selected: z.boolean(),
  id: z.number(),
  name: z.string(),
})

const schema = z.object({
  avatar: z.string().optional(),
  username: z
    .string()
    .min(5)
    .max(20, {
      message: i18n.t('zod_error_username'),
    }),
  favorite_genres: z
    .array(itemPropsSchema)
    .refine((value) => value.some((genre) => genre.selected), {
      message: i18n.t('zod_error_genres'),
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
