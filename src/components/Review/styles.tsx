import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  padding: ${RFValue(10)}px;
`;

export const ReviewRow = styled.View`
  width: 100%;
  background-color: ${COLORS.secondaryBackground};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageItem = styled.Image`
  height: ${RFValue(100)}px;
  width: ${RFValue(60)}px;
  border-radius: 10px;
`;

export const ProfilePictureRow = styled.View`
  width: 10%;
  padding: ${RFValue(5)}px;
`;

export const CommentSection = styled.View`
  flex-direction: column;
  margin-left: ${RFValue(15)}px;
  width: 65%;
`;

export const ProfileIcon = styled.Image`
  border-radius: 50px;
  height: 40px;
  width: 40px;
`;
