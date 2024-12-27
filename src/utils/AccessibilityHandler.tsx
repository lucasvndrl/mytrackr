import React, { ReactNode } from 'react'
import { View, AccessibilityRole, AccessibilityState } from 'react-native'

interface AccessibilityHandlerProps {
  children: ReactNode
  accessible?: boolean
  accessibilityLabel?: string
  accessibilityHint?: string
  accessibilityRole?: AccessibilityRole
  accessibilityState?: AccessibilityState
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive'
  accessibilityValue?: {
    min?: number
    max?: number
    now?: number
    text?: string
  }
  onAccessibilityTap?: () => void
  onMagicTap?: () => void
}

const AccessibilityHandler: React.FC<AccessibilityHandlerProps> = ({
  children,
  accessible,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  accessibilityState,
  accessibilityLiveRegion,
  accessibilityValue,
  onAccessibilityTap,
  onMagicTap,
}) => {
  return React.cloneElement(React.Children.only(children) as React.ReactElement, {
    accessible,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole,
    accessibilityState,
    accessibilityLiveRegion,
    accessibilityValue,
    onAccessibilityTap,
    onMagicTap,
  })
}

export default AccessibilityHandler
