import React, { useMemo, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SimpleHeader from "../components/SimpleHeader";
import { Alert, Image, StatusBar } from "react-native";
import { COLORS } from "../constants/theme";
import { useAuth } from "../hooks/Auth";
import Login from "../pages/Login";
import ScreenHeader from "../components/ScreenHeader";
import Homepage from "../pages/Homepage";
const Stack = createNativeStackNavigator<ScreenParamList>();

interface AppRoutesProps {
  initialRouteName?: keyof ScreenParamList;
  initialParams?: Record<string, unknown>;
}

const CustomStackNavigation = ({
  initialRouteName,
  initialParams,
}: AppRoutesProps) => {
  const { Navigator, Screen, Group } = Stack;
  const { authUser } = useAuth();
  StatusBar.setBackgroundColor(COLORS.background);
  const screens = useMemo(() => {
    if (!authUser.logged) {
      return (
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      );
    } else {
      return (
        <>
          <Screen
            name="Homepage"
            component={Homepage}
            options={{
              headerShown: true,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  onPress={() => props.navigation.openDrawer()}
                />
              ),
              navigationBarColor: COLORS.white,
              statusBarColor: COLORS.white,
            }}
          />
        </>
      );
    }
  }, [authUser.logged]);

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: COLORS.background,
          header: (props: any) => (
            <ScreenHeader
              {...props}
              onPressUser={() => props.navigation.openDrawer()}
              onPressSearch={() => null}
            />
          ),
        }}
        initialRouteName={initialRouteName}
      >
        {screens}
      </Navigator>
    </>
  );
};

export default CustomStackNavigation;