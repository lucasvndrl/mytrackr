type MoviesContextData = {
  movies: Movie[]
  getMovies: (accessToken: string) => Promise<boolean>
  reviews: Review[]
  getReviews: (accessToken: string) => Promise<boolean>
}

type UseMovies = () => MoviesContextData
