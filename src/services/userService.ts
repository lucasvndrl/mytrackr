import axios, { AxiosResponse } from 'axios'
import { AccountTable } from '../types/AuthContext'
import { UpdateAccount } from '../pages/Profile'

export interface RegisterUserProps {
  user_id: string
  username: string
  email: string
  created_at: Date
  last_login: Date
  accessToken: string
  favorite_genres: string[]
  avatar?: string
}

export const registerUser = async ({
  user_id,
  username,
  email,
  created_at,
  last_login,
  accessToken,
  favorite_genres,
  avatar,
}: RegisterUserProps): Promise<AxiosResponse<AccountTable>> => {
  const account = {
    user_id,
    username,
    email,
    created_at: created_at,
    last_login: last_login,
    favorite_genres,
    avatar,
  } as AccountTable

  const response = await axios.post(
    `https://44e0-177-121-119-210.ngrok-free.app/account/`,
    {
      account,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return response
}

export const getUserDetails = async (
  accessToken: string,
): Promise<AxiosResponse<AccountTable> | undefined> => {
  try {
    const response = await axios.get(`https://44e0-177-121-119-210.ngrok-free.app/account/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return response
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.log('Account not found')
        return error.response
      } else {
        console.error('An error occurred:', error.response?.data?.message || error.message)
        return error.response
      }
    } else {
      console.error('An unexpected error occurred:', error)
      return undefined
    }
  }
}

export const updateUserDetails = async (
  account: UpdateAccount,
  accessToken: string,
): Promise<AxiosResponse> => {
  const response = await axios.patch(
    `https://44e0-177-121-119-210.ngrok-free.app/account/`,
    {
      account,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return response
}

export const deleteUser = async (accessToken: string): Promise<AxiosResponse> => {
  const response = await axios.delete(`https://44e0-177-121-119-210.ngrok-free.app/account/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
