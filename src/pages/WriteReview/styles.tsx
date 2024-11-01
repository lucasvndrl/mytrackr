import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  height: 100%;
`

export const HeaderView = styled.View`
  width: 100%;
  background-color: transparent;
  flex-direction: row;
  height: ${RFValue(200)}px;
  padding: ${RFValue(10)}px;
  top: ${RFValue(25)}px;
`

export const ImageItem = styled.Image`
  height: ${RFValue(140)}px;
  width: ${RFValue(100)}px;
  border-radius: 10px;
`

export const LeftContainer = styled.View`
  flex-direction: column;
  padding: ${RFValue(20)}px;
  width: ${RFValue(140)}px;
`

export const RightContainer = styled.View`
  flex-direction: column;
  background-color: transparent;
  margin-left: ${RFValue(50)}px;
  width: ${RFValue(180)}px;
`

export const StatsContainer = styled.View`
  width: ${RFValue(150)}px;
  justify-content: center;
  align-items: center;
`

export const MovieTitleContainer = styled.View`
  width: ${RFValue(150)}px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  flex-wrap: wrap;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${COLORS.secondaryPurple};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.View`
  padding: ${RFValue(20)}px;
  width: 100%;
`
