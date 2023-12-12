import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import { BackIcon, Button, IconClose, RowTextIcon } from "./styles";
import { COLORS } from "../../constants/theme";

type SimpleHeaderProps = {
  onPress: () => void;
  closeIcon?: boolean;
  userIcon?: boolean;
  options?: { title?: string };
  route?: { params?: { title?: string } };
};

const SimpleHeader: FC<SimpleHeaderProps> = ({
  onPress,
  closeIcon,
  options,
  route,
  userIcon,
}) => {
  const title = route?.params?.title || options?.title || " ";
  const insets = useSafeAreaInsets();
  const hamburguerMenu = require("../../assets/icons/hamburguerMenu.png");
  const icon = require("../../assets/icons/back.png");
  const user = require("../../assets/icons/user.png");
  const back = require("../../assets/icons/back.png");
  return (
    <View
      style={{
        marginTop: insets.top,
        paddingLeft: insets.left + 8,
        paddingRight: insets.right + 8,
        backgroundColor: COLORS.background,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
      }}
    >
      <RowTextIcon>
        <Button onPress={onPress}>
          {closeIcon ? (
            <Image
              source={back}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ) : (
            <Image
              source={hamburguerMenu}
              style={{
                width: 30,
                height: 30,
              }}
            />
          )}
        </Button>

        {title && <Text>{title}</Text>}
        {/* For align header */}
      </RowTextIcon>

      {userIcon ? (
        <></>
      ) : (
        <View
          style={{
            marginRight: 5,
          }}
        >
          <Image
            source={user}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SimpleHeader;
