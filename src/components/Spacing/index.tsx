import React from "react";
import { SpacingContainer } from "./styles";

interface SpacingProps {
  width?: number;
  height?: number;
}

const Spacing = ({ width, height }: SpacingProps) => {
  return <SpacingContainer width={width} height={height} />;
};

export default Spacing;
