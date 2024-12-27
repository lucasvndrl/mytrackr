import React, { ReactNode, useContext } from 'react'
import { createContext, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import { RegisterUserProps, getUserDetails, registerUser } from '../../services/userService'
import * as RootNavigation from '../../routes/RootNavigation'
import { AuthContextData, AuthUser, UseAuth } from '../../types/AuthContext'
import { useMovies } from '../Movies'

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

const AuthProvider = ({ children, authUserState }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<AuthUser>(
    authUserState || {
      logged: false,
      login: '',
      userId: '',
      email: '',
    },
  )
  const { getCredentials, user } = useAuth0()
  const [loading, setLoading] = useState(false)
  const { getMovies } = useMovies()

  const handleLogin = async () => {
    RootNavigation.navigate('CheckCredentials')
    const userToken = await getCredentials().then((res: any) => {
      return res.accessToken
    })

    const result = await getUserDetails(userToken)

    if (result?.status == 200) {
      await getMovies()
      setAuthUser(() => ({
        logged: true,
        login: result.data.username,
        userId: result.data.user_id,
        email: user?.email ? user?.email : '',
        avatar: result.data.avatar ? result.data.avatar : '',
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

    if (response.status == 201) {
      const user = await getUserDetails(accessToken)
      if (user !== undefined) {
        setAuthUser(() => ({
          logged: true,
          login: user.data.username,
          userId: user.data.user_id,
          email: user.data.email,
          avatar: user.data.avatar ? user.data.avatar : '',
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
