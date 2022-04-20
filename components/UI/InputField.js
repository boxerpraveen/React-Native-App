//import liraries
import React from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";

// create a component
const InputField = ({ style, invalid, textInputConfig, label, isLogin }) => {
  let inputStyles = [styles.TextInput, style];
  let labelStyles = [styles.label];
  let invalidText;

  if (invalid) {
    inputStyles.push(styles.invalidInput);
    labelStyles.push(styles.invalidText);
    if (label === "Username") {
      invalidText = (
        <Text style={styles.invalidText}>Please check your UserName.</Text>
      );
    }
    if (label === "Password") {
      invalidText = (
        <Text style={styles.invalidText}>
          {isLogin
            ? "Please check your password"
            : "Password should between 6 to 20 characters which contain at least 1 numeric digit, 1 uppercase and 1 lowercase letter"}
        </Text>
      );
    }
    if (label === "Confirm Password") {
      invalidText = (
        <Text style={styles.invalidText}>Password should be same</Text>
      );
    }
    if (label === "Email") {
      invalidText = (
        <Text style={styles.invalidText}>
          Please enter your valid Email Address.
        </Text>
      );
    }
    if (label === "Phone") {
      invalidText = (
        <Text style={styles.invalidText}>
          Please enter your valid Phone Number.
        </Text>
      );
    }
  } 

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={labelStyles}>{label}</Text>
        <View>
          <TextInput
            {...textInputConfig}
            style={inputStyles}
            placeholderTextColor={!invalid ? "#a1a1a1" : "red"}
          />
        </View>
        {invalidText}
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    color: "#ffb347",
    fontSize: 14,
    marginBottom: 4,
  },
  TextInput: {
    padding: 8,
    height: 50,
    borderLeftWidth: 3,
    borderLeftColor: "#ffb347",
    borderRightWidth: 3,
    borderRightColor: "#ffb347",
    fontSize: 18,
    width: "100%",
    color: "#ffcc33",
    backgroundColor: "#54432C",
    borderRadius: 5,
  },
  invalidInput: {
    borderLeftColor: "#f00000",
    borderRightColor: "#ff0000",
    backgroundColor: "#FFD6D6",
  },
  invalidText: {
    color: "#FFD6D6",
    fontSize: 12,
  },
});

//make this component available to the app
export default InputField;
