import React, { useMemo, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SimpleHeader from '../components/SimpleHeader'
import { COLORS } from '../constants/theme'
import { useAuth } from '../hooks/Auth'
import Login from '../pages/Login'
import ScreenHeader from '../components/ScreenHeader'
import Homepage from '../pages/Homepage'
import MovieDetail from '../pages/MovieDetail'
import ReviewDetail from '../pages/ReviewDetail'
import LandPage from '../pages/LandPage'
import { useAuth0 } from 'react-native-auth0'
import Register from '../pages/Register'
const Stack = createNativeStackNavigator<ScreenParamList>()

interface AppRoutesProps {
  initialRouteName?: keyof ScreenParamList
  initialParams?: Record<string, unknown>
}

const CustomStackNavigation = ({ initialRouteName, initialParams }: AppRoutesProps) => {
  const { Navigator, Screen, Group } = Stack
  const { authUser } = useAuth()
  const { user } = useAuth0()

  const loggedIn = user !== undefined && user !== null
  // const loggedIn = authUser.logged
  const screens = useMemo(() => {
    if (!loggedIn) {
      return (
        <>
          <Screen
            name='Register'
            component={Register}
            options={{
              headerShown: false,
            }}
          />
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
        </>
      )
    } else {
      return (
        <>
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
