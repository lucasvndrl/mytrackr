import styled from 'styled-components/native'
import { COLORS } from '../../../constants/theme'
import { RFValue } from 'react-native-responsive-fontsize'

interface ItemContainerProps {
  selected: boolean
}

export const ItemContainer = styled.TouchableOpacity<ItemContainerProps>`
  border: 1px solid ${COLORS.secondaryPurple};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(20)}px;
  border-style: ${(props) => (props.selected ? 'solid' : 'dashed')};
  width: ${RFValue(50)}px;
  margin-right: ${RFValue(10)}px;
  background-color: ${(props) => (props.selected ? COLORS.secondaryBackground : COLORS.background)};
`
