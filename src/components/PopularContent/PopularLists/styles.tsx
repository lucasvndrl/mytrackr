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
  justify-content: space-between;
  flex-direction: column;
`;

export const ImageCover = styled.View`
  width: 100px;
  border-radius: 10px;
  flex-direction: row;
  position: relative;
`;

export const ImageItem = styled.Image<{
  rightValue: number;
}>`
  height: 65px;
  width: 50px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  right: ${(props) => props.rightValue}px;
`;

export const TitleContainer = styled.View`
  margin-top: 65px;
`;
