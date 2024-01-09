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
import { useAuth0 } from 'react-native-auth0'

const Login = () => {
  const { authorize } = useAuth0()

  const onLogin = async () => {
    try {
      await authorize()
    } catch (e) {
      console.log(e)
    }
  }

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
        <ActionButton onPress={onLogin}>
          <Typography type='Button Title'>Login</Typography>
        </ActionButton>
      </ButtonContainer>
    </Container>
  )
}

export default Login
