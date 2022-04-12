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
    borderRadius: 5,
    shadowColor: "black",
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});
