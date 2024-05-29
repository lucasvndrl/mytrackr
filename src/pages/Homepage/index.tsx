import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import Typography from '../../components/Typography'
import { Container, TitleContainer } from './styles'
import { COLORS } from '../../constants/theme'
import PopularMovies from '../../components/PopularContent/PopularMovies'
import PopularLists from '../../components/PopularContent/PopularLists'
import RecentReviews from '../../components/RecentReviews'
import { reviews } from '../../mocks/ReviewMocks'
import { useAuth0 } from 'react-native-auth0'
import axios from 'axios'
import { useAuth } from '../../hooks/Auth'
const Homepage = () => {
  const { getCredentials, user, clearSession, authorize } = useAuth0()
  const { login } = useAuth()
  useEffect(() => {
    // clearSession()
    const creds = async () => {
      await getCredentials().then((res: any) => {
        console.log(res.accessToken)
        console.log(res.scope)
        return res?.accessToken
      })
    }
    creds()
  }, [])
  return (
    <>
      <Container>
        <ScrollView>
          <TitleContainer>
            <Typography type='Heading 1' color={COLORS.white}>
              Hello, MALDONADO! 👋
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
