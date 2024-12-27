import React from 'react'
import { render } from '@testing-library/react-native'
import RecentReviews from './index'
import { Review as ReviewType } from '../../types/Review'
import { NavigationContainer } from '@react-navigation/native'
import '@react-native-async-storage/async-storage'

// Mock dos dados das reviews
const mockReviews: ReviewType[] = [
  {
    review_id: '1',
    movie_id: '1',
    review_text: 'Review 1',
    reviewer: 'Reviewer 1',
    rating: 5,
    movie_title: 'Movie 1',
    reviewer_name: 'Reviewer 1',
    movie_poster: require('../../assets/images/batman.png'),
    reviewer_avatar: require('../../assets/icons/user.png'),
  },
  {
    review_id: '2',
    movie_id: '2',
    review_text: 'Review 2',
    reviewer: 'Reviewer 2',
    rating: 5,
    movie_title: 'Movie 2',
    movie_poster: require('../../assets/images/batman.png'),
    reviewer_name: 'Reviewer 2',
    reviewer_avatar: require('../../assets/icons/user.png'),
  },
]

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}))
jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(() => [{ languageCode: 'en' }]),
  findBestAvailableLanguage: jest.fn(),
}))

describe('RecentReviews Component', () => {
  it('should render the title and reviews', () => {
    const { getByText, getAllByTestId } = render(
      <NavigationContainer>
        <RecentReviews reviews={mockReviews} />
      </NavigationContainer>,
    )

    expect(getByText('Recent reviews')).toBeTruthy()

    const reviewElements = getAllByTestId('review-item')
    expect(reviewElements.length).toBe(mockReviews.length)
  })
})
