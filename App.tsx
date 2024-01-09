import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { AuthProvider } from './src/hooks/Auth'
import { Routes } from './src/routes'
import { useAuth0, Auth0Provider } from 'react-native-auth0'
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
        await fetchFonts() // Aguarde o carregamento das fontes
        await new Promise((resolve) => setTimeout(resolve, 2000)) // Aguarde 2000ms
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
      <AuthProvider>
        <Routes initialRouteName='Homepage' />
      </AuthProvider>
    </Auth0Provider>
  )
}
