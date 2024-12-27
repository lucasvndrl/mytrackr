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
import { useTranslation } from 'react-i18next'
import AccessibilityHandler from '../../utils/AccessibilityHandler'

const LandPage = () => {
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <Container>
      <ImageBanner>
        <ImageCover source={require('../../assets/images/batmanBanner.png')} blurRadius={0.5} />
        <TitleContainer>
          <Typography type='App Title'>mytrackr</Typography>
        </TitleContainer>
      </ImageBanner>
      <ButtonContainer>
        <MessageContainer accessible accessibilityLabel={t('land_page_text')}>
          <Typography type='Heading 2' textAlign='center'>
            {t('land_page_text')}
          </Typography>
        </MessageContainer>
        <AccessibilityHandler
          accessibilityLabel={t('acs_login_button')}
          accessibilityHint={t('acs_login_button_hint')}
        >
          <ActionButton onPress={() => navigation.navigate('Login' as never)}>
            <Typography type='Button Title'>{t('land_page_get_started')}</Typography>
          </ActionButton>
        </AccessibilityHandler>
      </ButtonContainer>
    </Container>
  )
}

export default LandPage
