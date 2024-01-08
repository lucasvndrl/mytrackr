import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
  justify-content: center;
`

export const ButtonContainer = styled.View`
  height: ${RFValue(250)}px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`
export const TitleContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(2)}px;
  border-radius: 25px;
`
export const MessageContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 75%;
`

export const ActionButton = styled.TouchableOpacity`
  width: 50%;
  height: ${RFValue(60)}px;
  border-radius: 10px;
  background-color: ${COLORS.primaryPurple};
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(10)}px;
`

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${COLORS.white};
  text-align: center;
  margin-top: 30px;
`
