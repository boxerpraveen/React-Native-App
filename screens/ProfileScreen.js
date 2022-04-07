import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import AfterSignUp from "../components/SignUp/AfterSignUp";

const ProfileScreen = () => {
  const [formValid, setFormValid] = useState(false);
  const [inputs, setInputs] = useState({
    userName: { value: "", isValid: true },
    password: { value: "", isValid: true },
    confirmPassword: { value: "", isValid: true },
    emailAddress: { value: "", isValid: true },
    phoneNumber: { value: "", isValid: true },
  });

  let signUp;

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const signUpData = {
      userName: inputs.userName.value,
      password: inputs.password.value,
      confirmPassword: inputs.confirmPassword.value,
      emailAddress: inputs.emailAddress.value,
      phoneNumber: inputs.phoneNumber.value,
    };

    const passLengthValidation = (value) => {
      const regEx = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
      return regEx.test(value);
    };

    const emailValidation = (value) => {
      const regEx = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/);
      return regEx.test(value);
    };

    const userNameIsValid = signUpData.userName.trim().length > 0;
    const passwordIsValid = passLengthValidation(signUpData.password);
    const confirmPasswordIsValid =
      signUpData.password === signUpData.confirmPassword &&
      passLengthValidation(signUpData.confirmPassword);
    const emailAddressIsValid = emailValidation(signUpData.emailAddress);
    const phoneNumberIsValid =
      !isNaN(signUpData.phoneNumber) && signUpData.phoneNumber.length === 10;

    if (
      !userNameIsValid ||
      !passwordIsValid ||
      !emailAddressIsValid ||
      !confirmPasswordIsValid ||
      !phoneNumberIsValid
    ) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          userName: {
            value: curInputs.userName.value,
            isValid: userNameIsValid,
          },
          password: {
            value: curInputs.password.value,
            isValid: passwordIsValid,
          },
          confirmPassword: {
            value: curInputs.confirmPassword.value,
            isValid: confirmPasswordIsValid,
          },
          emailAddress: {
            value: curInputs.emailAddress.value,
            isValid: emailAddressIsValid,
          },
          phoneNumber: {
            value: curInputs.phoneNumber.value,
            isValid: phoneNumberIsValid,
          },
        };
      });
    }
    if (
      userNameIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid &&
      emailAddressIsValid &&
      phoneNumberIsValid
    ) {
      setFormValid(true);
    }
    console.log([
      inputs.userName.value,
      inputs.password.value,
      inputs.confirmPassword.value,
      inputs.emailAddress.value,
      inputs.phoneNumber.value,
    ]);
  }

  signUp = (
    <View style={styles.card}>
      <InputField
        label="Username"
        invalid={!inputs.userName.isValid}
        textInputConfig={{
          placeholder: "Username",
          keyboardType: "default",
          autoCapitaize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "userName"),
        }}
      />
      <InputField
        label="Password"
        invalid={!inputs.password.isValid}
        textInputConfig={{
          placeholder: "Password",
          keyboardType: "default",
          secureTextEntry: true,
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "password"),
        }}
      />
      <InputField
        label="Confirm Password"
        invalid={!inputs.confirmPassword.isValid}
        textInputConfig={{
          placeholder: "Confirm Password",
          keyboardType: "default",
          secureTextEntry: true,
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "confirmPassword"),
        }}
      />
      <InputField
        label="Email"
        invalid={!inputs.emailAddress.isValid}
        textInputConfig={{
          placeholder: "Email Address",
          keyboardType: "email-address",
          onChangeText: inputChangedHandler.bind(this, "emailAddress"),
        }}
      />
      <InputField
        label="Phone"
        invalid={!inputs.phoneNumber.isValid}
        textInputConfig={{
          placeholder: "Phone Number",
          keyboardType: "phone-pad",
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, "phoneNumber"),
        }}
      />
      <PrimaryButton
        style={styles.createAccountButton}
        onPress={() => submitHandler()}
      >
        Create a New Account
      </PrimaryButton>
      <Text style={styles.buttonMidText}>or</Text>
      <PrimaryButton style={styles.signInButton} onPress={signInHandler}>
        Sign In
      </PrimaryButton>
    </View>
  );

  if (formValid) {
    signUp = (
      <AfterSignUp
        userName={inputs.userName.value}
        password={inputs.confirmPassword.value}
        email={inputs.emailAddress.value}
        phone={inputs.phoneNumber.value}
      />
    );
  }

  function signInHandler() {
    Alert.alert("Sign In", "Do you already have a Account?", [
      { text: "No!", style: "destructive" },
    ]);
  }

  return (
    <LinearGradient colors={["#ffb347", "#ffcc33"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/Image/Chicken.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView style={styles.rootScreen}>
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
            <Card style={styles.card}>{signUp}</Card>

            <Text>Terms & Condition</Text>
          </View>
        </ScrollView>
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
    paddingVertical: 15,
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
