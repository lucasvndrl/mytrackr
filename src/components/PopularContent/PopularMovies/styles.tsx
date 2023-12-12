import styled from "styled-components/native";
import { COLORS } from "../../../constants/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  padding: ${RFValue(10)}px;
`;
export const MovieList = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  justify-content: space-between;
  elevation: 10;
`;

export const ImageItem = styled.Image`
  border-radius: 5px;
  height: ${RFValue(70)}px;
  width: ${RFValue(50)}px;
`;
