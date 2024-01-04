import { StyleSheet, TextStyle } from 'react-native'
import { COLORS } from '../../constants/theme'

export type TypographyType =
  | 'Heading 1'
  | 'Heading 2'
  | 'Heading 3'
  | 'Heading 4'
  | 'Heading 5'
  | 'Lead Paragraph'
  | 'Lead Paragraph Semibold'
  | 'Paragraph'
  | 'Paragraph Semibold'
  | 'Small paragraph'
  | 'Error'
  | 'Input Label'
  | 'Input Value'
  | 'Menu Title'
  | 'Heading 2 Semi Bold'
  | 'Simple Paragraph Bold'
  | 'Button Title'
  | 'App Title'

export const typographyTypes = StyleSheet.create<Record<TypographyType, TextStyle>>({
  'Heading 1': {
    fontFamily: 'OpenSansBold',
    fontSize: 24,
    lineHeight: 32,
  },
  'Heading 2': {
    fontFamily: 'OpenSansBold',
    fontSize: 20,
    lineHeight: 28,
  },
  'Heading 2 Semi Bold': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 20,
    lineHeight: 28,
  },
  'Heading 3': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
  },
  'Heading 4': {
    fontFamily: 'OpenSansRegular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
  },
  'Heading 5': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
  },
  'Lead Paragraph': {
    fontFamily: 'OpenSansRegular',
    fontSize: 20,
    lineHeight: 29,
  },
  'Lead Paragraph Semibold': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 20,
    lineHeight: 28,
  },
  Paragraph: {
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
    lineHeight: 24,
  },
  'Paragraph Semibold': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  'Small paragraph': {
    fontFamily: 'OpenSansRegular',
    fontSize: 12,
    lineHeight: 16,
  },
  Error: {
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.red,
  },
  'Input Label': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.white,
  },
  'Input Value': {
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
    lineHeight: 16,
  },
  'Menu Title': {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 17,
    lineHeight: 24,
  },
  'Simple Paragraph Bold': {
    fontFamily: 'OpenSansBold',
    fontSize: 14,
    lineHeight: 15,
  },
  'Button Title': {
    fontFamily: 'OpenSansBold',
    fontSize: 15,
    lineHeight: 15,
  },
  'App Title': {
    fontFamily: 'OpenSansBold',
    fontSize: 50,
    lineHeight: 50,
  },
})
