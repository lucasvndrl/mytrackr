/* eslint-disable react-native/no-inline-styles */
import React from "react";
import Typography, { TypographyProps } from "./index";
import { COLORS } from "../../constants/theme";
import { spacing } from "../../constants/spacing";
type ExtraProps = TypographyProps & {
  axaTheme?: boolean;
};

export const InputLabel = ({ children, ...props }: Partial<ExtraProps>) => (
  <Typography
    style={{ marginBottom: 2, marginLeft: spacing[1] }}
    type="Input Label"
    color={COLORS.white}
    {...props}
  >
    {children}
  </Typography>
);

export const InputValue = ({
  children,
  ...props
}: Partial<TypographyProps>) => (
  <Typography {...props} type="Input Value" color={COLORS.white}>
    {children}
  </Typography>
);

export const ErrorLabel = ({
  children,
  ...props
}: Partial<TypographyProps>) => (
  <Typography {...props} type="Error">
    {children}
  </Typography>
);
