import React from 'react'
import { Container, TextContainer } from './styles'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '../../constants/theme'
import Typography from '../Typography'

interface LoadingProps {
  activityIndicator?: boolean
  loadingText?: string
}

const Loading = ({ activityIndicator, loadingText }: LoadingProps) => {
  return (
    <Container>
      {activityIndicator ? (
        <ActivityIndicator size='small' color={COLORS.secondaryBackground} />
      ) : null}
      <TextContainer>
        <Typography type='Heading 3'>{loadingText ? loadingText : 'Loading...'}</Typography>
      </TextContainer>
    </Container>
  )
}

export default Loading
