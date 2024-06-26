import React, { useEffect } from 'react'
import { ScrollView, ToastAndroid } from 'react-native'
import PopularLists from '../../components/PopularContent/PopularLists'
import PopularMovies from '../../components/PopularContent/PopularMovies'
import RecentReviews from '../../components/RecentReviews'
import Typography from '../../components/Typography'
import { COLORS } from '../../constants/theme'
import { useAuth } from '../../hooks/Auth'
import { reviews } from '../../mocks/ReviewMocks'
import { Container, TitleContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useAuth0 } from 'react-native-auth0'
import { messages } from '../../constants/messages'
const Homepage = () => {
  const { authUser } = useAuth()
  const { getCredentials } = useAuth0()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (authUser.logged === false) {
      navigate('CheckCredentials' as never)
    } else {
      showToastLoggedIn()
    }
  }, [])

  const showToastLoggedIn = () => {
    ToastAndroid.showWithGravityAndOffset(
      messages.toast_user_logged_in,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
  }
  return (
    <>
      <Container>
        <ScrollView>
          <TitleContainer>
            <Typography type='Heading 1' color={COLORS.white}>
              Hello, {authUser.login ? authUser.login : 'YOU'}! 👋
            </Typography>
            <Typography type='Small paragraph' color={COLORS.white}>
              Welcome to MyTrackr!
            </Typography>
          </TitleContainer>
          <PopularMovies />
          <PopularLists />
          <RecentReviews reviews={reviews} />
        </ScrollView>
      </Container>
    </>
  )
}

export default Homepage
