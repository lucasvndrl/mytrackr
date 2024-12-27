type MoviesContextData = {
  movies: Movie[]
  getMovies: () => Promise<boolean>
  reviews: Review[]
  getReviews: () => Promise<boolean>
}

type UseMovies = () => MoviesContextData
