import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { Auth0Provider } from 'react-native-auth0'
import { AuthProvider } from './src/hooks/Auth'
import { Routes } from './src/routes'
import { PaperProvider } from 'react-native-paper'
import { MoviesContext, MoviesProvider } from './src/hooks/Movies'
const fetchFonts = async () => {
  await Font.loadAsync({
    OpenSansLight: require('./src/assets/fonts/OpenSans_Condensed-Light.ttf'),
    OpenSansRegular: require('./src/assets/fonts/OpenSans_Condensed-Regular.ttf'),
    OpenSansMedium: require('./src/assets/fonts/OpenSans_Condensed-Medium.ttf'),
    OpenSansSemiBold: require('./src/assets/fonts/OpenSans_Condensed-SemiBold.ttf'),
    OpenSansBold: require('./src/assets/fonts/OpenSans_Condensed-Bold.ttf'),
  })
}

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  useEffect(() => {
    const prepare = async () => {
      try {
        await fetchFonts()

        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.error(e)
      } finally {
        setFontsLoaded(true)
      }
    }
    prepare()
  }, [])

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <Auth0Provider
      domain='dev-3e4c7c585pp5uhrt.us.auth0.com'
      clientId='FAIwkqSImAmlhoJQPBPDygxhEQyspdnx'
    >
      <PaperProvider>
        <AuthProvider>
          <MoviesProvider>
            <Routes initialRouteName='Land' />
          </MoviesProvider>
        </AuthProvider>
      </PaperProvider>
    </Auth0Provider>
  )
}
