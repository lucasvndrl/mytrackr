import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Review as ReviewType } from '../../types/Review'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Review from '.'

const mockReview: ReviewType = {
  movie_id: '1',
  review_id: '1',
  movie_title: 'Inception',
  reviewer_name: 'John Doe',
  reviewer_avatar: require('../../assets/icons/user.png'),
  review_text: 'Amazing movie with a mind-bending plot!',
  rating: 5,
  reviewer: 'testId',
  movie_poster: require('../../assets/images/dontlookup.png'),
}

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }
})
describe('Review Component', () => {
  it('should render the reviewer avatar, name, and review text', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Review review={mockReview} showFullInfo={true} />
      </NavigationContainer>,
    )

    expect(getByTestId('reviewer-avatar')).toBeTruthy()

    expect(getByText(mockReview.movie_title)).toBeTruthy()

    expect(getByText(mockReview.reviewer_name)).toBeTruthy()

    expect(getByText(mockReview.review_text)).toBeTruthy()
  })

  it('should navigate to ReviewDetail on button press', async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Review review={mockReview} showFullInfo={true} testID='navigate-button' />
      </NavigationContainer>,
    )

    const button = getByTestId('navigate-button')
    fireEvent.press(button)
    waitFor(() => {
      expect(useNavigation).toHaveBeenCalledWith('ReviewDetail', { review: mockReview })
    })
  })
})
