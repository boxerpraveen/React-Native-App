import { View, StyleSheet } from "react-native";
import React from "react";

const Card = ({ children, style }) => {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
});
