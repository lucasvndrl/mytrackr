import React, { useMemo, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SimpleHeader from "../components/SimpleHeader";
import { Alert, Image, StatusBar } from "react-native";
import { COLORS } from "../constants/theme";
import { useAuth } from "../hooks/Auth";
import Login from "../pages/Login";
import ScreenHeader from "../components/ScreenHeader";
import Homepage from "../pages/Homepage";
import ReviewDetail from "../pages/ReviewDetail";
import { ReviewType } from "../types/Review";
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
              navigationBarColor: COLORS.background,
              statusBarColor: COLORS.background,
            }}
          />
          <Screen
            name="ReviewDetail"
            component={ReviewDetail}
            options={{
              headerShown: false,
              header: (props: any) => (
                <SimpleHeader
                  {...props}
                  closeIcon={true}
                  userIcon={true}
                  onPress={() => props.navigation.pop()}
                />
              ),
              navigationBarColor: "transparent",
              statusBarColor: "transparent",
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
