import React, { ReactNode, useContext } from 'react'
import { createContext, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import { RegisterUserProps, getUserDetails, registerUser } from '../../services/userService'
import * as RootNavigation from '../../routes/RootNavigation'
import { AuthContextData, AuthUser, UseAuth } from '../../types/AuthContext'

type AuthProviderProps = {
  children: ReactNode
  authUserState?: AuthUser
}

export const AuthContext = createContext({
  authUser: { logged: false },
  loading: true,
  handleLogin: async () => {},
  handleRegister: async ({}: RegisterUserProps) => {},
  setAuthUser: ({}: AuthUser) => {},
} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<AuthUser>({
    logged: false,
    login: '',
    userId: '',
    email: '',
  })
  const { getCredentials, user } = useAuth0()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    RootNavigation.navigate('CheckCredentials')
    const userToken = await getCredentials().then((res: any) => {
      return res.accessToken
    })

    const result = await getUserDetails(userToken)

    if (result?.status == 200) {
      setAuthUser(() => ({
        logged: true,
        login: result.data.account.username,
        userId: result.data.account.user_id,
        email: user?.email ? user?.email : '',
        avatar: result.data.account.avatar ? result.data.account.avatar : '',
      }))
      RootNavigation.navigate('Homepage')
    } else {
      RootNavigation.navigate('Register')
    }
  }

  const handleRegister = async ({
    user_id,
    username,
    email,
    created_at,
    last_login,
    accessToken,
    favorite_genres,
    avatar,
  }: RegisterUserProps) => {
    const response = await registerUser({
      user_id: user_id,
      created_at: created_at,
      email: email,
      last_login: last_login,
      username: username,
      accessToken: accessToken,
      favorite_genres: favorite_genres,
      avatar: avatar,
    })

    if (response.status == 200) {
      const user = await getUserDetails(accessToken)
      if (user !== undefined) {
        setAuthUser(() => ({
          logged: true,
          login: user.data.account.username,
          userId: user.data.account.user_id,
          email: user.data.account.email,
          avatar: user.data.account.avatar ? user.data.account.avatar : '',
        }))
        RootNavigation.navigate('Homepage')
      }
    }
  }
  return (
    <AuthContext.Provider
      value={{
        loading,
        authUser,
        handleLogin,
        handleRegister,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth: UseAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
