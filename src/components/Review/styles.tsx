import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";

export const Container = styled.View`
  background-color: ${COLORS.secondaryPurple};
  width: 100%;
  padding: 10px;
`;

export const ReviewRow = styled.View`
  width: 100%;
  background-color: ${COLORS.background};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageItem = styled.Image`
  height: 100%;
  width: 20%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ProfilePictureRow = styled.View`
  width: 10%;
  padding: 5px;
`;

export const CommentSection = styled.View`
  flex-direction: column;
  margin-left: 20px;
  width: 65%;
`;

export const ProfileIcon = styled.Image`
  border-radius: 50px;
  height: 40px;
  width: 40px;
`;
