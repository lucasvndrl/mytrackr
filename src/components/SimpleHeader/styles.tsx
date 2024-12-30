import { RectButton } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`

export const BackIcon = styled.Text`
  padding-right: 24px;
`
export const IconClose = styled.Text`
  padding-right: 24px;
`
export const RowTextIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
