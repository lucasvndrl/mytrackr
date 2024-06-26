import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  margin-top: ${RFValue(10)}px;
  background-color: ${COLORS.background};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${RFValue(10)}px;
`
