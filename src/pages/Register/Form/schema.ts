import { z } from 'zod'
import { User } from '../../../types/User'
import { getDefaultGenresValues } from './defaultGenresValues'
import i18n from '../../../../i18n'

const getValidationErrorMessages = () => {
  return {
    usernameMin: i18n.isInitialized
      ? i18n.t('zod_error_username_min')
      : 'Username must be at least 5 characters.',
    usernameMax: i18n.isInitialized
      ? i18n.t('zod_error_username_max')
      : 'Username must not exceed 20 characters.',
    favoriteGenresError: i18n.isInitialized
      ? i18n.t('zod_error_genres')
      : 'You must select at least one genre.',
  }
}
const itemPropsSchema = z.object({
  selected: z.boolean(),
  id: z.number(),
  name: z.string(),
})

const getSchema = () => {
  const validationErrorMessages = getValidationErrorMessages()

  return z.object({
    avatar: z.string().optional(),
    username: z
      .string()
      .min(5, {
        message: validationErrorMessages.usernameMin,
      })
      .max(20, {
        message: validationErrorMessages.usernameMax,
      }),
    favorite_genres: z
      .array(itemPropsSchema)
      .refine((value) => value.some((genre) => genre.selected), {
        message: validationErrorMessages.favoriteGenresError,
      }),
  })
}

export const createUserFormSchema = () => getSchema()

const userFormSchema = getSchema()

export type UserFormData = z.infer<typeof userFormSchema>

export const getUserFormDefaultValues = (user?: Partial<User>): Partial<UserFormData> => {
  return {
    avatar: user?.avatar ?? '',
    username: user?.username ?? '',
    favorite_genres: user?.favorites_genres ?? getDefaultGenresValues(),
  } as UserFormData
}
