import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame10 = ({ style }) => {
  return (
    <View style={[styles.profileOnOffParent, style]}>
      <Image
        style={styles.profileOnOffIcon}
        contentFit="cover"
        source={require("../assets/profile-on-off2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileOnOffIcon: {
    width: 30,
    height: 30,
  },
  profileOnOffParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame10;
