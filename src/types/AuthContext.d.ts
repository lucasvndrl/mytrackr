import { RegisterUserProps } from '../services/userService'

type AuthUser = {
  login: string
  logged: boolean
  userId: string
  email: string
  avatar?: string
}

type AuthUserLoginProps = {
  username: string
  password: string
}

type AuthContextData = {
  authUser: AuthUser
  loading: boolean
  handleLogin: () => Promise<void>
  handleRegister: ({}: RegisterUserProps) => Promise<void>
  setAuthUser: ({}: AuthUser) => void
}

type UseAuth = () => AuthContextData

type AccountTable = {
  user_id: string
  username: string
  email: string
  created_at: Date
  last_login: Date
  favorite_genres: string[]
  avatar?: string
}

type AccountResponse = {
  account: AccountTable
}
