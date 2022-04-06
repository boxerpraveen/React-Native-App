//import liraries
import React from "react";
import { StyleSheet, TextInput } from "react-native";

// create a component
const InputField = ({ placeholder, style, onChange, keyboard, password }) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={[styles.TextInput, style]}
        onChange={onChange}
        keyboardType={keyboard}
        placeholderTextColor="#a1a1a1"
        secureTextEntry={password}
      />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  TextInput: {
    padding: 8,
    height: 50,
    borderLeftWidth: 2,
    borderLeftColor: "#ffb347",
    borderRightWidth: 2,
    borderRightColor: "#ffb347",
    fontSize: 18,
    width: "100%",
    color: "#ffcc33",
    backgroundColor: "#54432C",
    borderRadius: 5,
    marginBottom: 10,
  },
});

//make this component available to the app
export default InputField;
