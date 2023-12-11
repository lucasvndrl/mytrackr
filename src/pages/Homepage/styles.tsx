import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`;

export const TitleContainer = styled.View`
  flex-direction: column;
  background-color: ${COLORS.background};
  height: 70px;
  justify-content: flex-start;
  padding: 10px;
`;
