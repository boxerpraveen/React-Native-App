import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";

const DineInScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.cardText}>DineInScreen!</Text>
      </Card>
    </View>
  );
};

export default DineInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#B247FF",
  },
  cardText: {
    textAlign: "center",
  },
});
