import styled from "styled-components/native";
import { COLORS } from "../../../constants/theme";

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  padding: 10px;
`;
export const PopularList = styled.View`
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
  elevation: 10;
`;

export const ListSection = styled.View`
  background-color: ${COLORS.background};
  flex-direction: column;
`;

export const ImageCover = styled.View`
  width: 100px;
  border-radius: 10px;
  flex-direction: row;
`;

export const ImageItem = styled.Image<{
  rightValue: number;
}>`
  height: 65px;
  width: 50px;
  border-radius: 10px;
  position: absolute;
  right: ${(props) => props.rightValue}px;
`;

export const TitleContainer = styled.View`
  margin-top: 65px;
`;
