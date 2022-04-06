import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Navbar from "./components/NavBar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Babylonica: require("./assets/Fonts/Babylonica-Regular.ttf"),
    GrapeNuts: require("./assets/Fonts/GrapeNuts-Regular.ttf"),
    CaveatRegular: require("./assets/Fonts/Caveat-Regular.ttf"),
    CaveatMedium: require("./assets/Fonts/Caveat-Medium.ttf"),
    CaveatSemiBold: require("./assets/Fonts/Caveat-SemiBold.ttf"),
    CaveatBold: require("./assets/Fonts/Caveat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <StatusBar backgroundColor="orange" barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
