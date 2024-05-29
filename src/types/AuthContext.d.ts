type AuthUser = {
  login: string
  password: string
  logged: boolean
  userId: string
}

type AuthUserLoginProps = {
  username: string
  password: string
}

type AuthContextData = {
  authUser: AuthUser
  loading: boolean
  login: () => Promise<void>
}

type UseAuth = () => AuthContextData

type AccountTable = {
  user_id: string
  username: string
  email: string
  created_at: Date
  last_login: Date
}
