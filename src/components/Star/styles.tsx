import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const StarItem = styled.Image`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  margin-right: ${RFValue(2)}px;
`;

export const StarsRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(10)}px;
`;
