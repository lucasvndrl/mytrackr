import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const IconRow = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
`

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
  border-radius: ${RFPercentage(50)}px;
  background-color: ${COLORS.white};
`
export const IconView = styled.Image`
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
  border-radius: ${RFPercentage(50)}px;
`
