import React from "react";
import { View } from "react-native";
import { ButtonContainer, Container, LoginButton } from "./styles";
import Typography from "../../components/Typography";
import { useAuth } from "../../hooks/Auth";

const Login = () => {
  const { login } = useAuth();
  const doLogin = () => {
    login();
  };
  return (
    <Container>
      <ButtonContainer>
        <LoginButton onPress={doLogin}>
          <Typography type="Button Title">Entrar no App</Typography>
        </LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default Login;
