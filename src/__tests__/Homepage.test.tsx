import { useNavigation } from '@react-navigation/native'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react-native'
import { ToastAndroid } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import { useAuth } from '../hooks/Auth'
import { useMovies } from '../hooks/Movies'
import Homepage from '../pages/Homepage'
import '@react-native-async-storage/async-storage'
import * as translations from '../locales/en/translation.json'
import { I18nextProvider } from 'react-i18next'
import i18nTesting from '../../i18nForTesting'
import { customRender } from '../utils/customRender'

jest.mock('../hooks/Auth')
jest.mock('react-native-auth0')
jest.mock('../hooks/Movies')
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}))
jest.spyOn(ToastAndroid, 'showWithGravityAndOffset')
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}))
// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({
//     t: (key: string) => key,
//     i18n: {
//       changeLanguage: () => new Promise(() => {}),
//     },
//     initReactI18next: { type: '3rdParty', init: jest.fn() },
//   }),
// }))
jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(() => [{ languageCode: 'en' }]),
  findBestAvailableLanguage: jest.fn(),
}))

describe('Homepage', () => {
  const mockNavigate = jest.fn()
  const mockGetCredentials = jest.fn()
  const mockGetMovies = jest.fn()
  const mockGetReviews = jest.fn()

  beforeEach(() => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: true, login: 'TestUser' } })
    ;(useAuth0 as jest.Mock).mockReturnValue({ getCredentials: mockGetCredentials })
    ;(useAuth0 as jest.Mock).mockReturnValue({
      getCredentials: jest.fn().mockResolvedValue({ accessToken: 'mockAccessToken' }),
    })
    ;(useMovies as jest.Mock).mockReturnValue({
      movies: [],
      getMovies: mockGetMovies,
      reviews: [],
      getReviews: mockGetReviews,
    })
    ;(useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the Homepage component', async () => {
    customRender(<Homepage />)
    expect(screen.getByText('Welcome to MyTrackr!')).toBeTruthy()
    expect(screen.getByText('Hello, TestUser!')).toBeTruthy()
  })

  test('displays greeting based on user login state', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: true, login: 'TestUser' } })
    customRender(<Homepage />)
    expect(screen.getByText('Hello, TestUser!')).toBeTruthy()
  })

  test('fetches movies and reviews on mount', async () => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: true, login: 'TestUser' } })
    customRender(<Homepage />)
    await waitFor(() => {
      expect(mockGetMovies).toHaveBeenCalled()
      expect(mockGetReviews).toHaveBeenCalled()
    })
  })
  test('redirects if user is not logged in', async () => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: false } })
    customRender(<Homepage />)
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('CheckCredentials'))
  })

  test('displays a toast when user logs in', async () => {
    customRender(<Homepage />)
    await waitFor(() =>
      expect(ToastAndroid.showWithGravityAndOffset).toHaveBeenCalledWith(
        'Magnificently logged in!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      ),
    )
  })

  test('displays a toast when user logs in, in portuguese', async () => {
    customRender(<Homepage />, { language: 'pt' } as any)
    await waitFor(() =>
      expect(ToastAndroid.showWithGravityAndOffset).toHaveBeenCalledWith(
        'Usuário logado com sucesso!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      ),
    )
  })
})
