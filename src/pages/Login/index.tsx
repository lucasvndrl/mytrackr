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
import { useTranslation } from 'react-i18next'
import AccessibilityHandler from '../../utils/AccessibilityHandler'

const Login = () => {
  const { authorize, error } = useAuth0()
  const { handleLogin } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { navigate } = useNavigation()
  const { t } = useTranslation()

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
          <TitleContainer accessible accessibilityLabel={t('acs_app_title')}>
            <Typography type='App Title'>mytrackr</Typography>
          </TitleContainer>
          <ButtonContainer>
            <MessageContainer accessible>
              <Typography type='Lead Paragraph' textAlign='center'>
                {t('login_header')}
              </Typography>
            </MessageContainer>

            <AccessibilityHandler
              accessible
              accessibilityRole='button'
              accessibilityHint={t('acs_login_button_hint')}
            >
              <ActionButton onPress={onLogin}>
                <Typography type='Button Title'>{t('button_title_login')}</Typography>
              </ActionButton>
            </AccessibilityHandler>
          </ButtonContainer>
        </>
      )}
    </Container>
  )
}

export default Login
