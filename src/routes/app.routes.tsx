import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { useAuth } from "../hooks/Auth";
import CustomStackNavigation from "./CustomStackNavigation";

interface AppRoutesProps {
  initialRouteName?: keyof ScreenParamList;
  initialParams?: Record<string, unknown>;
}

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

export const AppRoutes = ({
  initialRouteName,
  initialParams,
}: AppRoutesProps) => {
  const dimensions = useWindowDimensions();
  const { authUser } = useAuth();

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: "left",
          drawerType: "front",
          drawerStyle: {
            width: dimensions.width,
          },
          swipeEnabled: authUser.logged,
        }}
        backBehavior="history"
      >
        <Screen name="Tela inicial">
          {(props) => (
            <CustomStackNavigation
              {...props}
              initialRouteName={initialRouteName}
              initialParams={initialParams}
            />
          )}
        </Screen>
      </Navigator>
    </>
  );
};
