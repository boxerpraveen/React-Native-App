import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Navbar from "./components/NavBar";

export default function App() {
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
