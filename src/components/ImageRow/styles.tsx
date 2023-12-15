import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const CastContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: ${RFValue(20)}px;
`;

export const CastImage = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(80)}px;
  margin-right: ${RFValue(15)}px;
`;
