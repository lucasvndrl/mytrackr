import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(10)}px;
  background-color: ${COLORS.background};
  width: 100%;
`;
