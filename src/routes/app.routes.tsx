import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useWindowDimensions } from 'react-native'
import { useAuth } from '../hooks/Auth'
import CustomStackNavigation from './CustomStackNavigation'
import { COLORS } from '../constants/theme'
import CustomDrawerContent from '../components/CustomDrawerContent/CustomDrawerContent'
import Homepage from '../pages/Homepage'
import { useTranslation } from 'react-i18next'

interface AppRoutesProps {
  initialRouteName?: keyof ScreenParamList
  initialParams?: Record<string, unknown>
}

const Drawer = createDrawerNavigator()
const { Navigator, Screen } = Drawer

export const AppRoutes = ({ initialRouteName, initialParams }: AppRoutesProps) => {
  const dimensions = useWindowDimensions()
  const { authUser } = useAuth()
  const { t } = useTranslation()

  return (
    <>
      <Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'left',
          drawerType: 'front',
          drawerStyle: {
            width: dimensions.width,
            backgroundColor: COLORS.background,
            justifyContent: 'space-between',
          },
          swipeEnabled: authUser.logged,
        }}
        backBehavior='history'
      >
        <Screen name={t('homepage')}>
          {(props) => (
            <CustomStackNavigation
              {...props}
              initialRouteName={initialRouteName}
              initialParams={initialParams}
            />
          )}
        </Screen>
      </Navigator>
    </>
  )
}
