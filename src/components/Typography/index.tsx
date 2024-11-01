import React, { ReactNode } from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import { TypographyType, typographyTypes } from './styles'
import { COLORS } from '../../constants/theme'

export type TypographyFontWeight = 'Regular' | 'Semibold' | 'Bold'

export const handleFontWeight = (family: TypographyFontWeight) => {
  if (family === 'Semibold') {
    return 'OpenSansSemiBold'
  } else if (family === 'Bold') {
    return 'OpenSansBold'
  } else {
    return 'OpenSansRegular'
  }
}

export interface TypographyProps extends TextProps {
  children: ReactNode
  style?: TextStyle
  type?: TypographyType
  fontWeight?: TypographyFontWeight
  lineHeight?: number
  letterSpacing?: number
  fontSize?: number
  color?: string
  textAlign?: TextStyle['textAlign']
  testID?: string
}

const Typography = ({
  children,
  style,
  type = 'Paragraph',
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  color,
  textAlign,
  testID,
  ...props
}: TypographyProps) => {
  const typeStyle = typographyTypes[type]

  return (
    <Text
      testID={testID}
      {...props}
      style={[
        {
          fontFamily: fontWeight ? handleFontWeight(fontWeight) : typeStyle?.fontFamily,
          fontSize: fontSize || typeStyle?.fontSize || 16,
          color: color || typeStyle?.color || COLORS.white,
          textAlign,
          lineHeight: lineHeight || typeStyle?.lineHeight,
          letterSpacing: letterSpacing || typeStyle?.letterSpacing,
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}

export default Typography
