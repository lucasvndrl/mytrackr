import axios, { AxiosResponse } from 'axios'

export interface ReviewsTable {
  review_id: string
  movie_id: string
  review_text: string
  reviewer: string
  rating: number
  movie_title: string
  reviewer_name: string
  reviewer_avatar: string
}

export interface CreateReviewDTO {
  movie_id: string
  review_text: string
  rating: number
  reviewer: string
}

export const getAllReviews = async (
  accessToken: string,
): Promise<AxiosResponse<ReviewsTable[]> | undefined> => {
  const response = await axios.get(`https://f30b-170-78-98-160.ngrok-free.app/reviews/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}

export const createReview = async (
  reviewDTO: CreateReviewDTO,
  accessToken: string,
): Promise<AxiosResponse> => {
  console.log(reviewDTO)
  const response = await axios.post(
    `https://f30b-170-78-98-160.ngrok-free.app/reviews/`,
    reviewDTO,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return response
}
