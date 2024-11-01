import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
  background-color: ${COLORS.background};
  width: 100%;
  padding: ${RFValue(10)}px;
`
