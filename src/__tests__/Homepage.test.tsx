import { useNavigation } from '@react-navigation/native'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react-native'
import { ToastAndroid } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import { useAuth } from '../hooks/Auth'
import { useMovies } from '../hooks/Movies'
import Homepage from '../pages/Homepage'

jest.mock('../hooks/Auth')
jest.mock('react-native-auth0')
jest.mock('../hooks/Movies')
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}))
jest.spyOn(ToastAndroid, 'showWithGravityAndOffset')

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
    render(<Homepage />)
    expect(screen.getByText('Welcome to MyTrackr!')).toBeTruthy()
    expect(screen.getByText('Hello, TestUser!')).toBeTruthy()
  })

  test('displays greeting based on user login state', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: true, login: 'TestUser' } })
    render(<Homepage />)
    expect(screen.getByText('Hello, TestUser!')).toBeTruthy()
  })

  test('fetches movies and reviews on mount', async () => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: true, login: 'TestUser' } })
    render(<Homepage />)
    await waitFor(() => {
      expect(mockGetMovies).toHaveBeenCalled()
      expect(mockGetReviews).toHaveBeenCalled()
    })
  })
  test('redirects if user is not logged in', async () => {
    ;(useAuth as jest.Mock).mockReturnValue({ authUser: { logged: false } })
    render(<Homepage />)
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('CheckCredentials'))
  })

  test('displays a toast when user logs in', async () => {
    render(<Homepage />)
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
})
