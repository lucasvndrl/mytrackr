import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import Typography from '../../components/Typography'
import {
  ActionButton,
  ButtonContainer,
  Container,
  ImageBanner,
  ImageCover,
  MessageContainer,
  TitleContainer,
} from './styles'
import CustomModal from '../../components/CustomModal'

const LandPage = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <ImageBanner>
        <ImageCover source={require('../../assets/images/batmanBanner.png')} blurRadius={0.5} />
        <TitleContainer>
          <Typography type='App Title'>mytrackr</Typography>
        </TitleContainer>
      </ImageBanner>
      <ButtonContainer>
        <MessageContainer>
          <Typography type='Heading 2' textAlign='center'>
            “Track films you’ve watched. Save those you want to see. Tell your friends what’s good.”
          </Typography>
        </MessageContainer>
        <ActionButton onPress={() => navigation.navigate('Login' as never)}>
          <Typography type='Button Title'>Get Started</Typography>
        </ActionButton>
      </ButtonContainer>
    </Container>
  )
}

export default LandPage
