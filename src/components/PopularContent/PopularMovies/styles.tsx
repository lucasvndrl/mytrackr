import styled from "styled-components/native";
import { COLORS } from "../../../constants/theme";

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  padding: 10px;
`;
export const MovieList = styled.View`
  flex-direction: row;
  padding: 5px;
  justify-content: space-evenly;
  elevation: 10;
`;
