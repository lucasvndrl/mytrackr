import React from "react";
import { createRef } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
} from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { COLORS } from "../constants/theme";

interface RoutesProps {
  initialRouteName?: keyof ScreenParamList;
  initialParams?: Record<string, unknown>;
}

export const navigationRef = createRef<NavigationContainerRef<true>>();

export function Routes({ initialRouteName, initialParams }: RoutesProps) {
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
    },
  };
  return (
    <NavigationContainer theme={Theme} ref={navigationRef}>
      {/* <ModalFullscreen /> */}
      <AppRoutes
        initialRouteName={initialRouteName}
        initialParams={initialParams}
      />
    </NavigationContainer>
  );
}
