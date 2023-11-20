import styled from "styled-components/native";
import { COLORS } from "../../../constants/theme";

export const Container = styled.View`
  background-color: ${COLORS.secondaryPurple};
  width: 100%;
  padding: 10px;
`;
export const PopularList = styled.View`
  flex-direction: row;
  padding: 5px;
  justify-content: space-evenly;
  elevation: 10;
`;

export const ListSection = styled.View`
  width: 100px;
  background-color: ${COLORS.background};
  border-radius: 10px;
`;

export const ImageCover = styled.View`
  width: 100px;
  border-radius: 10px;
  flex-direction: row;
`;
