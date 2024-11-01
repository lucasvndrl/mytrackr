import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  height: 100%;
`

export const ImageBannerContainer = styled.View`
  width: 100%;
  elevation: 50;
  shadow-color: #52006a;
  height: ${RFValue(200)}px;
`

export const ImageBanner = styled.Image`
  width: 100%;
  height: ${RFValue(200)}px;
`

export const ReviewContainer = styled.View`
  width: 100%;
  padding: ${RFValue(5)}px;
  height: ${RFValue(200)}px;
  flex-direction: row;
`

export const ContentContainer = styled.View`
  width: 60%;
  padding: 20px;
`

export const MovieCoverContainer = styled.View`
  width: 40%;
  padding: 20px;
`

export const ImageItem = styled.Image`
  height: ${RFValue(150)}px;
  width: ${RFValue(100)}px;
  border-radius: 10px;
`

export const ProfileName = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProfileIcon = styled.Image`
  border-radius: 50px;
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  margin-right: ${RFValue(5)}px;
`

export const MovieTitleRow = styled.View`
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  align-items: center;
`

export const StarsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(10)}px;
`

export const LikesRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(10)}px;
`

export const LikeItem = styled.Image`
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
  margin-right: ${RFValue(10)}px;
`
