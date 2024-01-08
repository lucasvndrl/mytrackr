import React from 'react'
import { Image, View } from 'react-native'
import {
  ButtonContainer,
  Container,
  ActionButton,
  TitleContainer,
  MessageContainer,
} from './styles'
import Typography from '../../components/Typography'
import { useAuth } from '../../hooks/Auth'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <TitleContainer>
        <Typography type='App Title'>mytrackr</Typography>
      </TitleContainer>
      <ButtonContainer>
        {/* <Typography type='Heading 2' textAlign='center'>
          Login
        </Typography> */}
        <MessageContainer>
          <Typography type='Lead Paragraph' textAlign='center'>
            Please sign in to continue.
          </Typography>
        </MessageContainer>
        <ActionButton onPress={() => navigation.navigate('Login' as never)}>
          <Typography type='Button Title'>Login</Typography>
        </ActionButton>
      </ButtonContainer>
    </Container>
  )
}

export default Login
