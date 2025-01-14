import { Container, TextContainer } from './styles'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '../../constants/theme'
import Typography from '../../components/Typography'
import { useAuth } from '../../hooks/Auth'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useAuth0 } from 'react-native-auth0'
import { useTranslation } from 'react-i18next'

const CheckCredentials = () => {
  const { handleLogin, authUser } = useAuth()
  const { hasValidCredentials } = useAuth0()
  const navigate = useNavigation()
  const { t } = useTranslation()

  const fetchAuthUser = async () => {
    const userLoggedAuth0 = await hasValidCredentials()
    if (userLoggedAuth0) {
      await handleLogin()
    } else {
      navigate.navigate('Land' as never)
    }
  }

  useFocusEffect(() => {
    fetchAuthUser()
  })

  return (
    <Container>
      <ActivityIndicator size='small' color={COLORS.secondaryBackground} />
      <TextContainer>
        <Typography type='Heading 3'>{t('checking_credentials_text')}</Typography>
      </TextContainer>
    </Container>
  )
}

export default CheckCredentials
