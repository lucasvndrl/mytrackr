type HeaderOptions = {
  title?: string
}

type ScreenParamList = {
  Login: undefined
  Homepage: undefined
  ReviewDetail: { review: Review }
  MovieDetail: { movie_id: string }
  ListDetail: undefined
  Land: undefined
  Register: undefined
  Profile: undefined
  CheckCredentials: undefined
  WriteReview: { movie: Movie }
  ReviewsList: { reviews: Review[] }
}
