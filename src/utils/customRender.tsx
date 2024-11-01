import { ReactElement, ReactNode } from 'react'
import { AuthContextData, AuthUser } from '../types/AuthContext'
import { render } from '@testing-library/react-native'
import { AuthContext, AuthProvider } from '../hooks/Auth'
import { Auth0Provider, useAuth0 } from 'react-native-auth0'
import { MoviesProvider } from '../hooks/Movies'
import { PaperProvider } from 'react-native-paper'
import { Movie } from '../types/Movie'
import { Review } from '../types/Review'
import { Routes } from '../routes'
import CustomStackNavigation from '../routes/CustomStackNavigation'
import { NavigationContainer } from '@react-navigation/native'

interface CustomRenderOptions {
  initialState?: InitialState
}

interface WrapperProps {
  children: ReactElement
}

interface InitialState {
  authUser: AuthUser
  movies: Movie[]
  reviews: Review[]
}

const loggedUserState = {
  authUser: {
    logged: true,
    email: 'test@test.com',
    login: 'loginTest',
    userId: 'idTest',
    avatar: require('../assets/icons/user.png'),
  } as AuthUser,
  movies: [
    {
      title: 'Movie 1',
      directed_by: 'Test Director',
      duration: 145,
      poster: require('../assets/images/batman.png'),
      rating: 5,
      synopsis: 'Test Synopsis',
      movie_id: '1',
    },
    {
      title: 'Movie 2',
      directed_by: 'Test Director',
      duration: 145,
      poster: require('../assets/images/batman.png'),
      rating: 5,
      synopsis: 'Test Synopsis',
      movie_id: '2',
    },
  ],
  reviews: [
    {
      review_id: '1',
      movie_id: '1',
      review_text: 'Review 1',
      reviewer: 'Reviewer 1',
      rating: 5,
      movie_title: 'Movie 1',
      reviewer_name: 'Reviewer 1',
      movie_poster: require('../assets/images/batman.png'),
      reviewer_avatar: require('../assets/icons/user.png'),
    },
    {
      review_id: '2',
      movie_id: '2',
      review_text: 'Review 2',
      reviewer: 'Reviewer 2',
      rating: 5,
      movie_title: 'Movie 2',
      movie_poster: require('../assets/images/batman.png'),
      reviewer_name: 'Reviewer 2',
      reviewer_avatar: require('../assets/icons/user.png'),
    },
  ],
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const { authUser, movies, reviews } = options?.initialState || loggedUserState
  return render(ui, {
    ...options,
    wrapper: ({ children }: WrapperProps) => {
      // return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
      return (
        <PaperProvider>
          <AuthProvider authUserState={authUser}>
            <MoviesProvider moviesInitialState={movies} reviewsInitialState={reviews}>
              <NavigationContainer>{children}</NavigationContainer>
            </MoviesProvider>
          </AuthProvider>
        </PaperProvider>
      )
    },
  })
}

export * from '@testing-library/react-native'
export { customRender }
