import React from 'react'
import { Container, TextContainer } from './styles'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '../../constants/theme'
import Typography from '../Typography'

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size='small' color={COLORS.secondaryBackground} />
      <TextContainer>
        <Typography type='Heading 3'>Loading...</Typography>
      </TextContainer>
    </Container>
  )
}

export default Loading
