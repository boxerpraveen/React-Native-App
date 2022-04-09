import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../UI/PrimaryButton";

const AfterSignUp = ({ userName, password, email, phone, isLogin }) => {
  const navigation = useNavigation();

  function homePageHandler() {
    navigation.replace("App");
  }

  return (
    <View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Successfully created your account!
        </Text>
      </View>
      <View style={styles.userContainer}>
        {!isLogin && (
          <Text style={styles.userText}>
            User Name is -<Text style={styles.userTextValue}> {userName}</Text>
          </Text>
        )}
        {isLogin && (
          <Text style={styles.userText}>
            Email Address is -{" "}
            <Text style={styles.userTextValue}> {email}</Text>
          </Text>
        )}
        <Text style={styles.userText}>
          Password is - <Text style={styles.userTextValue}> {password}</Text>
        </Text>
        {!isLogin && (
          <Text style={styles.userText}>
            Email Address is -{" "}
            <Text style={styles.userTextValue}> {email}</Text>
          </Text>
        )}
        {!isLogin && (
          <Text style={styles.userText}>
            Phone Number is -<Text style={styles.userTextValue}> {phone}</Text>
          </Text>
        )}
      </View>
      <PrimaryButton onPress={homePageHandler} style={styles.returnBtn}>
        Return To Home
      </PrimaryButton>
    </View>
  );
};

export default AfterSignUp;

const styles = StyleSheet.create({
  headerTextContainer: {
    marginHorizontal: 5,
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fafafa",
  },
  userContainer: {
    marginVertical: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userText: {
    color: "whitesmoke",
    fontSize: 16,
  },
  userTextValue: {
    fontSize: 18,
    color: "gold",
  },
  returnBtn: {
    backgroundColor: "dodgerblue",
  },
});
