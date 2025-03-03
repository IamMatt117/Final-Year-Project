import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const ProfileOnOffIcon2 = ({ style }) => {
  return (
    <Image
      style={[styles.profileOnOffIcon, style]}
      contentFit="cover"
      source={require("../assets/property-1profile-off.png")}
    />
  );
};

const styles = StyleSheet.create({
  profileOnOffIcon: {
    width: 30,
    height: 30,
  },
});

export default ProfileOnOffIcon2;
