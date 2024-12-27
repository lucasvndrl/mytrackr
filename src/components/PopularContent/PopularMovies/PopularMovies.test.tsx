import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import PopularMovies from './index'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Movie } from '../../../types/Movie'
import '@react-native-async-storage/async-storage'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

const mockedNavigate = jest.fn()

const mockMovies: Movie[] = [
  {
    movie_id: '1',
    poster: require('../../../assets/images/batman.png'),
    directed_by: 'Test',
    duration: 145,
    rating: 5,
    synopsis: 'Test',
    title: 'Test',
  },
  {
    movie_id: '2',
    poster: require('../../../assets/images/batman.png'),
    directed_by: 'Test',
    duration: 145,
    rating: 5,
    synopsis: 'Test',
    title: 'Test',
  },
]

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}))
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
    initReactI18next: { type: '3rdParty', init: jest.fn() },
  }),
}))
describe('PopularMovies Component', () => {
  it('should render the title and movies', () => {
    ;(useNavigation as jest.Mock).mockReturnValue({ navigate: mockedNavigate })
    render(<PopularMovies movies={mockMovies} />)

    expect(screen.getByText('Popular movies this month')).toBeTruthy()

    const images = screen.getAllByTestId('movie-poster')
    expect(images.length).toBe(mockMovies.length)
  })

  it('should navigate to MovieDetail on movie press', () => {
    render(<PopularMovies movies={mockMovies} />)
    const touchableElements = screen.getAllByTestId('button-movie-details')
    fireEvent.press(touchableElements[0])

    expect(mockedNavigate).toHaveBeenCalledWith('MovieDetail', { movie_id: '1' })
  })
})
