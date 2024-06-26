import { z } from 'zod'
import { User } from '../../../types/User'

const schema = z.object({
  avatar: z.string().optional(),
  username: z
    .string()
    .min(5)
    .max(20, {
      message: 'Username must be between 5 and 20 characters',
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
