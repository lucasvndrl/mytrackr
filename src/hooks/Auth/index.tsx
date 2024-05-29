import React, { ReactNode, useContext } from 'react'
import { createContext, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import { registerUser } from '../../services/registerUserService'

type AuthProviderProps = {
  children: ReactNode
  authUserState?: AuthUser
}

export const AuthContext = createContext({
  authUser: { logged: false },
  loading: true,
  login: async () => {},
} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<AuthUser>({
    logged: false,
    login: '',
    password: '',
    userId: '',
  })
  const { getCredentials, user } = useAuth0()
  const [loading, setLoading] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  const login = async () => {
    const userToken = await getCredentials().then((res: any) => {
      return res.accessToken
    })
    const userRegister = await registerUser({
      accessToken: userToken,
      user_id: user!!.sub!!,
      created_at: new Date(),
      email: user!!.email!!,
      last_login: new Date(),
      username: user!!.nickname!!,
    })

    if (userRegister.status == 200) {
      setAuthUser({ ...authUser, logged: true, userId: user!!.sub!! })
    }
  }
  return (
    <AuthContext.Provider
      value={{
        loading,
        authUser,
        login,
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
