import styled from "styled-components/native";
import { COLORS } from "../../constants/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 50%;
  height: 100px;
  border-radius: 10px;
  background-color: ${COLORS.primaryPurple};
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${COLORS.white};
  text-align: center;
  margin-top: 30px;
`;
