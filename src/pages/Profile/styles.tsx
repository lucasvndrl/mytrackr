import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${COLORS.background};
  padding: ${RFValue(20)}px;
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
export const ButtonDeleteContainer = styled.TouchableOpacity`
  background-color: ${COLORS.red};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  width: 100%;
  margin-top: ${RFValue(220)}px;
`
