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

const Homepage = () => {
  const { getCredentials, clearSession } = useAuth0()

  useEffect(() => {
    console.log('oiiiii')
    const creds = async () => {
      console.log('oiii')
      await getCredentials().then((res) => {
        console.log(res?.accessToken)
        console.log(res?.idToken)
        axios
          .get('https://f395-177-121-125-0.ngrok-free.app/authorized', {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              Authorization: 'Bearer ' + res?.accessToken,
            },
          })
          .then((res) => {
            console.log('SE FUNCIONAR FUNCIONOU!!!', res)
          })
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
