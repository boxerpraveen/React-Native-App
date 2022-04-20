//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import FlatButton from "../UI/FlatButton";
import InputField from "../UI/InputField";
import PrimaryButton from "../UI/PrimaryButton";
import AfterSignUp from "./AfterSignUp";

const AuthForm = ({ isLogin }) => {
  const navigation = useNavigation();

  const [formValid, setFormValid] = useState(false);
  const [inputs, setInputs] = useState({
    userName: { value: "", isValid: false },
    password: { value: "", isValid: false },
    confirmPassword: { value: "", isValid: false },
    emailAddress: { value: "", isValid: false },
    phoneNumber: { value: "", isValid: false },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
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
    const passwordIsValid = passLengthValidation(signUpData.password.trim());
    const confirmPasswordIsValid =
      signUpData.password === signUpData.confirmPassword &&
      passLengthValidation(signUpData.confirmPassword.trim());
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
      (userNameIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid &&
        emailAddressIsValid &&
        phoneNumberIsValid) ||
      (isLogin && emailAddressIsValid && passwordIsValid)
    ) {
      setFormValid(true);
    }
  }

  if (formValid) {
    return (
      <AfterSignUp
        isLogin={isLogin}
        userName={inputs.userName.value}
        password={inputs.password.value}
        email={inputs.emailAddress.value}
        phone={inputs.phoneNumber.value}
      />
    );
  }

  return (
    <View>
      <View style={styles.container}>
        {isLogin && (
          <InputField
            label="Email"
            invalid={!inputs.emailAddress.isValid}
            textInputConfig={{
              placeholder: "Email Address",
              keyboardType: "email-address",
              onChangeText: inputChangedHandler.bind(this, "emailAddress"),
            }}
          />
        )}
        {!isLogin && (
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
        )}
        <InputField
          isLogin={isLogin}
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
        {!isLogin && (
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
        )}
        {!isLogin && (
          <InputField
            label="Email"
            invalid={!inputs.emailAddress.isValid}
            textInputConfig={{
              placeholder: "Email Address",
              keyboardType: "email-address",
              onChangeText: inputChangedHandler.bind(this, "emailAddress"),
            }}
          />
        )}
        {!isLogin && (
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
        )}
      </View>
      <PrimaryButton
        style={styles.createAccountButton}
        onPress={() => submitHandler()}
      >
        {!isLogin ? "Create a New Account" : "Login"}
      </PrimaryButton>
      <FlatButton style={styles.signInButton} onPress={switchAuthModeHandler}>
        {!isLogin ? "Sign In" : "Create Your Account"}
      </FlatButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#553C18",
  },
  createAccountButton: {
    backgroundColor: "#D00F61",
  },
  signInButton: {
    backgroundColor: "transparent",
  },
  buttonMidText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffcc33",
    marginVertical: 3,
    fontSize: 18,
  },
});

export default AuthForm;
