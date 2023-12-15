import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${COLORS.background};
  width: 100%;
  height: 100%;
`;

export const ImageBanner = styled.Image`
  width: 100%;
  height: ${RFValue(200)}px;
  border-bottom-right-radius: ${RFValue(200)}px;
`;

export const HeaderView = styled.View`
  width: 100%;
  background-color: transparent;
  flex-direction: row;
  height: ${RFValue(200)}px;
  top: ${RFValue(-100)}px;
`;

export const ImageItem = styled.Image`
  height: ${RFValue(140)}px;
  width: ${RFValue(100)}px;
  border-radius: 10px;
`;

export const LeftContainer = styled.View`
  flex-direction: column;
  padding: ${RFValue(20)}px;
  width: ${RFValue(140)}px;
`;

export const RightContainer = styled.View`
  flex-direction: column;
  background-color: transparent;
  padding: ${RFValue(5)}px;
  width: ${RFValue(180)}px;
  margin-top: ${RFValue(100)}px;
`;

export const OptionButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(25)}px;
  background-color: ${COLORS.secondaryPurple};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
`;

export const StatsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: transparent;
  justify-content: space-evenly;
  margin-top: ${RFValue(5)}px;
  margin-bottom: -${RFValue(10)}px;
`;

export const MovieTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const DirectorContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: baseline;
`;

export const SummaryContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const RatingsContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RateStarsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${RFValue(20)}px;
`;

export const InfoOptionsButton = styled.TouchableOpacity<{
  isActive: boolean;
}>`
  width: ${RFValue(50)}px;
  background-color: ${(props) =>
    props.isActive ? COLORS.secondaryPurple : "transparent"};
  border-radius: ${RFValue(30)}px;
  align-items: center;
  justify-content: center;
  border-width: ${RFValue(1)}px;
  border-color: ${COLORS.secondaryPurple};
  margin-right: ${RFValue(5)}px;
`;

export const AllReviewsRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(10)}px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
`;

export const ReviewContainer = styled.View`
  width: 100%;
  flex-direction: column;
  padding: ${RFValue(10)}px;
`;
