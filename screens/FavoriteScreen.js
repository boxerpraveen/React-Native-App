import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.cardText}>FavoriteScreen!</Text>
      </Card>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "violet",
  },
  cardText: {
    textAlign: "center",
  },
});
