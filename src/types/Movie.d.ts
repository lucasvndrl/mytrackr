import { ImageSourcePropType } from 'react-native'

type Movie = {
  movie_id: string
  title: string
  synopsis: string
  directed_by: string
  duration: number
  rating: number
  poster: ImageSourcePropType
}
