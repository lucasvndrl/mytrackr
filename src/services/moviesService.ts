import axios, { AxiosResponse } from 'axios'
import { ReviewsTable } from './reviewsService'
export interface MoviesTable {
  movie_id: string
  title: string
  synopsis: string
  directed_by: string
  duration: number
  rating: number
}

export const getAllMovies = async (
  accessToken: string,
): Promise<AxiosResponse<MoviesTable[]> | undefined> => {
  const response = await axios.get(`https://2cfc-187-46-129-205.ngrok-free.app/movies/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
