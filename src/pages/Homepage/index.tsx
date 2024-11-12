import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, ToastAndroid } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import Loading from '../../components/Loading'
import PopularMovies from '../../components/PopularContent/PopularMovies'
import RecentReviews from '../../components/RecentReviews'
import Typography from '../../components/Typography'
import { messages } from '../../constants/messages'
import { COLORS } from '../../constants/theme'
import { useAuth } from '../../hooks/Auth'
import { useMovies } from '../../hooks/Movies'
import { Container, TitleContainer } from './styles'
const Homepage = () => {
  const { authUser } = useAuth()
  const { getCredentials } = useAuth0()
  const { navigate } = useNavigation()
  const { movies, getMovies, reviews, getReviews } = useMovies()
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  const loadData = async () => {
    const userToken = await getCredentials().then((res: any) => {
      return res.accessToken
    })

    await getMovies(userToken)
    await getReviews(userToken)
  }

  useEffect(() => {
    if (authUser.logged === false) {
      navigate('CheckCredentials' as never)
    } else {
      loadData()
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

  const handleRefresh = () => {
    setIsRefreshing(true)
    loadData().then(() => {
      setIsRefreshing(false)
    })
  }

  return (
    <>
      {isRefreshing ? (
        <Loading activityIndicator={false} loadingText='Refreshing...' />
      ) : (
        <>
          <Container>
            <ScrollView
              testID='main-scrollview'
              refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
              }
            >
              <TitleContainer>
                <Typography type='Heading 1' color={COLORS.white}>
                  Hello, {authUser.login ? authUser.login : 'YOU'}!
                </Typography>
                <Typography type='Small paragraph' color={COLORS.white}>
                  Welcome to MyTrackr!
                </Typography>
              </TitleContainer>
              <PopularMovies movies={movies} />
              {/* <PopularLists /> */}
              <RecentReviews reviews={reviews} />
            </ScrollView>
          </Container>
        </>
      )}
    </>
  )
}

export default Homepage
