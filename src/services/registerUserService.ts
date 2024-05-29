import axios, { AxiosResponse } from 'axios'

interface Props {
  user_id: string
  username: string
  email: string
  created_at: Date
  last_login: Date
  accessToken: string
}

export const registerUser = async ({
  user_id,
  username,
  email,
  created_at,
  last_login,
  accessToken,
}: Props): Promise<AxiosResponse> => {
  const account = { user_id, username, email, created_at, last_login } as AccountTable
  console.log(accessToken)
  console.log(user_id)
  const call = await axios.post('https://def4-179-73-180-198.ngrok-free.app/save-user', {
    account,
  })
  console.log(call.request)
  return call
}
