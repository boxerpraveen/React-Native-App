import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

const FlatButton = ({ children, onPress, style }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed, style]
            : [styles.buttonInnerContainer, style]
        }
        onPress={onPress}
        android_ripple={{ color: "#653C14" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    marginVertical: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#D00F61",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
