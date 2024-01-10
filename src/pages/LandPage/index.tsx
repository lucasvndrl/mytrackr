import React from 'react'
import { Image, View } from 'react-native'
import {
  ButtonContainer,
  Container,
  ActionButton,
  ImageBanner,
  ImageCover,
  TitleContainer,
  MessageContainer,
} from './styles'
import Typography from '../../components/Typography'
import { useAuth } from '../../hooks/Auth'
import { useNavigation } from '@react-navigation/native'

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
