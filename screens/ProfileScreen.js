import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

const ProfileScreen = () => {
  const [signUp, setSignUp] = useState({
    userName: "",
    passWord: "",
    emailAddress: "",
    phoneNumber: null,
  });

  function userNameChangeHandler(userName) {
    console.log(userName);
  }

  function submitHandler() {
    Alert.alert(
      "Login Completed!",
      "Having a wonderful Breakfast, Lunch, Snack & Dinner",
      [{ text: "OK", style: "cancel" }]
    );
  }

  function signInHandler() {
    Alert.alert("Sign In", "Do you already have a Account?", [
      { text: "Yes!", style: "destructive" },
    ]);
  }

  function submitHandler() {
    Alert.alert(
      "Login Completed!",
      "Having a wonderful Breakfast, Lunch, Snack & Dinner",
      [{ text: "OK", style: "cancel" }]
    );
  }

  return (
    <LinearGradient colors={["#ffb347", "#ffcc33"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/Image/Chicken.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.textContent}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/Image/Food-logo.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text style={styles.headerText}>Sign Up </Text>
          <Text style={styles.subText}>
            Enjoy your time with our Clean, Healthy and Delicious Food!{" "}
          </Text>
          <Card style={styles.card}>
            <View style={styles.card}>
              <InputField
                placeholder="UserName"
                keyboard="default"
                onChange={userNameChangeHandler}
              />
              <InputField
                placeholder="Password"
                keyboard="default"
                password={true}
              />
              <InputField
                placeholder="Email Address"
                keyboard="email-address"
              />
              <InputField placeholder="Phone Number" keyboard="phone-pad" />
              <PrimaryButton
                style={styles.createAccountButton}
                onPress={submitHandler}
              >
                Create a New Account
              </PrimaryButton>
              <Text style={styles.buttonMidText}>or</Text>
              <PrimaryButton
                style={styles.signInButton}
                onPress={signInHandler}
              >
                Sign In
              </PrimaryButton>
            </View>
          </Card>

          <Text>Terms & Condition</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.45,
    bottom: -25,
  },
  imageContainer: {
    height: 124,
    width: 124,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  headerText: {
    fontSize: 30,
    color: "#54432C",
    fontFamily: "CaveatBold",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  subText: {
    fontFamily: "CaveatMedium",
    fontSize: 20,
    color: "#211a11",
    marginBottom: 8,
    textAlign: "center",
  },
  textContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#553C18",
  },
  cardText: {
    color: "white",
  },
  inputsContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
  },
  cardContainer: {
    width: "100%",
  },
  createAccountButton: {
    backgroundColor: "#D00F61",
  },
  signInButton: {
    backgroundColor: "orangered",
  },
  buttonMidText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffcc33",
    marginVertical: 3,
    fontSize: 18,
  },
});

export default ProfileScreen;
