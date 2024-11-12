import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  background-color: ${COLORS.background};
  width: 100%;
  min-height: ${RFValue(100)}px;
  display: flex;
`

export const ReviewRow = styled.View`
  width: 100%;
  background-color: ${COLORS.secondaryBackground};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(10)}px;
  flex: 1;
`

export const ImageItem = styled.Image`
  height: 100%;
  width: ${RFPercentage(10)}px;
  border-radius: 10px;
`

export const ProfilePictureRow = styled.View`
  width: 10%;
  padding: ${RFValue(5)}px;
`

export const CommentSection = styled.View`
  flex-direction: column;
  margin-left: ${RFValue(15)}px;
  display: flex;
  margin-right: ${RFValue(15)}px;
  flex: 1;
`

export const ProfileIcon = styled.Image`
  border-radius: 50px;
  height: 40px;
  width: 40px;
`
