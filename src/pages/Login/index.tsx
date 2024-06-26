import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import Loading from '../../components/Loading'
import Typography from '../../components/Typography'
import { useAuth } from '../../hooks/Auth'
import {
  ActionButton,
  ButtonContainer,
  Container,
  MessageContainer,
  TitleContainer,
} from './styles'

const Login = () => {
  const { authorize, error } = useAuth0()
  const { handleLogin } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { navigate } = useNavigation()

  const onLogin = async () => {
    try {
      setIsLoading(true)
      await authorize({
        scope: 'delete:current_user',
        audience: 'https://mytrackr-api/',
      })
      navigate('CheckCredentials' as never)
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
