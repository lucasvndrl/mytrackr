import { ReactNode, createContext, useContext, useState } from 'react'
import { MoviesTable, getAllMovies } from '../../services/moviesService'
import { posters } from '../../utils/posterRelation'
import { Movie } from '../../types/Movie'
import { Review } from '../../types/Review'
import { ReviewsTable, getAllReviews } from '../../services/reviewsService'

type MoviesProviderProps = {
  children: ReactNode
  moviesInitialState?: Movie[]
  reviewsInitialState?: Review[]
}

export const MoviesContext = createContext({
  movies: [] as Movie[],
  getMovies: async (accessToken: string): Promise<boolean> => {
    return false
  },
  reviews: [] as Review[],
  getReviews: async (accessToken: string): Promise<boolean> => {
    return false
  },
})

const MoviesProvider = ({
  children,
  moviesInitialState,
  reviewsInitialState,
}: MoviesProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>(moviesInitialState || [])
  const [reviews, setReviews] = useState<Review[]>(reviewsInitialState || [])

  const getMovies = async (accessToken: string): Promise<boolean> => {
    const response = await getAllMovies(accessToken)
    if (response?.status === 200) {
      const transformedResponse = transformMoviesResponse(response.data)
      setMovies(transformedResponse)
      return true
    }

    return false
  }

  const transformMoviesResponse = (movies: MoviesTable[]) => {
    return movies.map((movie) => ({
      movie_id: movie.movie_id,
      title: movie.title,
      synopsis: movie.synopsis,
      directed_by: movie.directed_by,
      duration: movie.duration,
      rating: movie.rating,
      poster:
        posters.find((poster) => poster.movieId === movie.movie_id)?.img ||
        require('../../assets/images/default-movie.png'),
    }))
  }

  const getReviews = async (accessToken: string): Promise<boolean> => {
    const response = await getAllReviews(accessToken)
    if (response?.status === 200) {
      const transformedResponse = transformReviewsResponse(response.data)
      setReviews(transformedResponse)
      return true
    }

    return false
  }

  const transformReviewsResponse = (reviews: ReviewsTable[]) => {
    return reviews.map((review) => ({
      review_id: review.review_id,
      movie_id: review.movie_id,
      review_text: review.review_text,
      reviewer: review.reviewer,
      rating: review.rating,
      movie_title: review.movie_title,
      reviewer_name: review.reviewer_name,
      reviewer_avatar: review.reviewer_avatar,
      movie_poster:
        posters.find((poster) => poster.movieId === review.movie_id)?.img ||
        require('../../assets/images/default-movie.png'),
    }))
  }

  return (
    <MoviesContext.Provider value={{ movies, getMovies, reviews, getReviews }}>
      {children}
    </MoviesContext.Provider>
  )
}

const useMovies: UseMovies = () => {
  const context = useContext(MoviesContext)
  return context
}

export { MoviesProvider, useMovies }
