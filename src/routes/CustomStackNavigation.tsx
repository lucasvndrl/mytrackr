import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useMemo } from 'react'
import { useAuth0 } from 'react-native-auth0'
import ScreenHeader from '../components/ScreenHeader'
import SimpleHeader from '../components/SimpleHeader'
import { COLORS } from '../constants/theme'
import { useAuth } from '../hooks/Auth'
import Homepage from '../pages/Homepage'
import LandPage from '../pages/LandPage'
import Login from '../pages/Login'
import MovieDetail from '../pages/MovieDetail'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import ReviewDetail from '../pages/ReviewDetail'
import CheckCredentials from '../pages/CheckCredentials'
import WriteReview from '../pages/WriteReview'
import ReviewsList from '../pages/ReviewsList'
import { useTranslation } from 'react-i18next'
const Stack = createNativeStackNavigator<ScreenParamList>()

interface AppRoutesProps {
  initialRouteName?: keyof ScreenParamList
  initialParams?: Record<string, unknown>
}

const CustomStackNavigation = ({ initialRouteName, initialParams }: AppRoutesProps) => {
  const { Navigator, Screen, Group } = Stack
  const { authUser } = useAuth()
  const { user } = useAuth0()
  const { t } = useTranslation()

  const loggedIn = user !== undefined && user !== null
  // const loggedIn = authUser.logged
  const screens = useMemo(() => {
    if (!loggedIn) {
      return (
        <>
          <Screen
            name='Land'
            component={LandPage}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='CheckCredentials'
            component={CheckCredentials}
            options={{
              headerShown: false,
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
        </>
      )
    } else {
      return (
        <>
          <Screen
            name='CheckCredentials'
            component={CheckCredentials}
            options={{
              headerShown: false,
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='Homepage'
            component={Homepage}
            options={{
              headerShown: true,
              header: (props: any) => (
                <SimpleHeader {...props} onPress={() => props.navigation.openDrawer()} />
              ),
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='MovieDetail'
            component={MovieDetail}
            options={{
              headerShown: false,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  closeIcon={true}
                  userIcon={true}
                  onPress={() => props.navigation.pop()}
                />
              ),
              navigationBarColor: 'transparent',
              statusBarColor: 'transparent',
            }}
          />
          <Screen
            name='ReviewDetail'
            component={ReviewDetail}
            options={{
              headerShown: true,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  closeIcon={true}
                  userIcon={true}
                  onPress={() => props.navigation.pop()}
                />
              ),
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='WriteReview'
            component={WriteReview}
            options={{
              headerShown: true,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  closeIcon={true}
                  userIcon={true}
                  onPress={() => props.navigation.pop()}
                  options={{ title: t('write_your_review_header') }}
                />
              ),
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='ReviewsList'
            component={ReviewsList}
            options={{
              headerShown: true,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  closeIcon={true}
                  userIcon={true}
                  onPress={() => props.navigation.pop()}
                />
              ),
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='Profile'
            component={Profile}
            options={{
              headerShown: true,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  closeIcon={true}
                  languageSelector={true}
                  userIcon={true}
                  onPress={() => props.navigation.pop()}
                />
              ),
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name='Register'
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </>
      )
    }
  }, [user])

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          header: (props: any) => (
            <ScreenHeader
              {...props}
              onPressUser={() => props.navigation.openDrawer()}
              onPressSearch={() => null}
            />
          ),
        }}
        initialRouteName={initialRouteName}
      >
        {screens}
      </Navigator>
    </>
  )
}

export default CustomStackNavigation
