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
import { useTranslation } from 'react-i18next'
const Homepage = () => {
  const { authUser } = useAuth()
  const { getCredentials } = useAuth0()
  const { navigate } = useNavigation()
  const { movies, getMovies, reviews, getReviews } = useMovies()
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
  const { t } = useTranslation()

  const loadData = async () => {
    await getMovies()
    await getReviews()
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
      t('toast_user_logged_in'),
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
        <Loading activityIndicator={false} loadingText={t('refreshing_message')} />
      ) : (
        <>
          <Container accessible>
            <ScrollView
              testID='main-scrollview'
              refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
              }
            >
              <TitleContainer accessible>
                <Typography type='Heading 1' color={COLORS.white}>
                  {t('homepage_welcome_message')},{' '}
                  {authUser.login ? authUser.login : t('homepage_welcome_generic_name')}!
                </Typography>
                <Typography type='Small paragraph' color={COLORS.white}>
                  {t('homepage_mytrackr_message')}
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
