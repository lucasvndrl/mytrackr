type AuthUser = {
  login: string;
  password: string;
  logged: boolean;
};

type AuthUserLoginProps = {
  username: string;
  password: string;
};

type AuthContextData = {
  authUser: AuthUser;
  loading: boolean;
  login: () => void;
};

type UseAuth = () => AuthContextData;
