import React, { FC } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RowTextIcon } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { COLORS } from "../../constants/theme";

type ScreenHeaderProps = {
  onPressUser: () => void;
  onPressSearch: () => void;
  options?: { title?: string };
  route?: { params?: { title?: string } };
};

const ScreenHeader: FC<ScreenHeaderProps> = ({
  onPressUser,
  onPressSearch,
  options,
  route,
}) => {
  const title = route?.params?.title || options?.title || " ";

  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        marginTop: insets.top,
        paddingLeft: insets.left + 24,
        paddingRight: insets.right + 24,
        paddingVertical: 18,
        backgroundColor: COLORS.white,
      }}
    >
      <RowTextIcon>
        <RectButton onPress={onPressUser}>
          <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
        </RectButton>
        {title && <Text>{title}</Text>}
        <RectButton onPress={onPressSearch}>
          <Text>{"O"}</Text>
        </RectButton>
      </RowTextIcon>
    </View>
  );
};

export default ScreenHeader;
