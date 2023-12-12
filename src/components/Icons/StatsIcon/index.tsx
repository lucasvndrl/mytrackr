import React from "react";
import { IconContainer, IconItem } from "./styles";
import Typography from "../../Typography";
import { COLORS, SIZES } from "../../../constants/theme";

interface StatsIconProps {
  image: any;
  stats: string;
}

const StatsIcon = (props: StatsIconProps) => {
  return (
    <IconContainer>
      <IconItem source={props.image} />
      <Typography fontSize={SIZES.small} color={COLORS.white}>
        {props.stats}
      </Typography>
    </IconContainer>
  );
};

export default StatsIcon;
