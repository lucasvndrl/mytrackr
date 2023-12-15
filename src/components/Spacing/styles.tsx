import styled from "styled-components/native";

export const SpacingContainer = styled.View<{
  width?: number;
  height?: number;
}>`
  background-color: transparent;
  width: ${(props) => (props.width ? props.width : 0)}px;
  height: ${(props) => (props.height ? props.height : 0)}px;
`;
