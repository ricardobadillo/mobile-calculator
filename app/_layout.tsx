import { Platform, Text, View } from "react-native";

import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "@/styles/global-styles";

import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Text>Header</Text>

      <Slot />
      <StatusBar style="light"></StatusBar>
    </View>
  );
}
