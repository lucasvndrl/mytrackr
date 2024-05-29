import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
  padding: ${RFValue(20)}px;
  justify-content: space-evenly;
`
export const PageTitleContainer = styled.View`
  margin-bottom: ${RFValue(20)}px;
  margin-top: ${RFValue(30)}px;
  align-items: center;
`
export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${COLORS.secondaryBackground};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  margin-top: ${RFValue(20)}px;
  width: 100%;
`
