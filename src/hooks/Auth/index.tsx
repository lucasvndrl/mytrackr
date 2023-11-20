import React, { ReactNode, useContext } from "react";
import { createContext, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
  authUserState?: AuthUser;
};

export const AuthContext = createContext({
  authUser: { logged: false },
  loading: true,
  login: () => {},
} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<AuthUser>({
    logged: false,
    login: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const login = () => {
    setAuthUser({ logged: true, login: "teste", password: "123" });
  };
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
  );
};

const useAuth: UseAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
