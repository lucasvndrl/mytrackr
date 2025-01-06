import axios, { AxiosResponse } from 'axios'
import { EXPO_PUBLIC_API_URL } from '@env'

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
  const response = await axios.get(`${EXPO_PUBLIC_API_URL}/movies/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
