import { z } from 'zod'
import { User } from '../../../types/User'
import i18n from '../../../../i18n'

const schema = z.object({
  avatar: z.string().optional(),
  username: z
    .string()
    .min(5)
    .max(20, {
      message: i18n.t('zod_error_username'),
    })
    .optional(),
})

export const profileFormSchema = z.intersection(schema, z.object({}))

export type ProfileFormData = z.infer<typeof profileFormSchema>

export const getUserFormDefaultValues = (user?: Partial<User>): Partial<ProfileFormData> => {
  return {
    avatar: user?.avatar ?? '',
    username: user?.username ?? '',
  } as ProfileFormData
}
