import styled from "styled-components/native";
import { COLORS } from "../../../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const IconContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconItem = styled.Image`
  height: ${RFValue(15)}px;
  width: ${RFValue(15)}px;
`;
