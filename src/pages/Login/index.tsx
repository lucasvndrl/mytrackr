import React, { useState } from 'react'
import {
  ButtonContainer,
  Container,
  ActionButton,
  TitleContainer,
  MessageContainer,
} from './styles'
import Typography from '../../components/Typography'
import { useAuth0 } from 'react-native-auth0'
import Loading from '../../components/Loading'
import { useAuth } from '../../hooks/Auth'

const Login = () => {
  const { authorize, error } = useAuth0()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onLogin = async () => {
    try {
      setIsLoading(true)
      await authorize({
        scope: 'delete:current_user',
        audience: 'https://mytrackr-api/',
      })
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  if (error) {
    setIsLoading(false)
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}

export default Login
