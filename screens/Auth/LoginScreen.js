import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../../components/UI/Card";
import AuthForm from "../../components/SignUp/AuthForm";

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#ffb347", "#ffcc33"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../assets/Image/Butter-masala.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView style={styles.rootScreen}>
          <View style={styles.textContent}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/Image/Food-logo.png")}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <Text style={styles.headerText}>Login </Text>
            <Text style={styles.subText}>
              Enjoy your time with our Clean, Healthy and Delicious Food!{" "}
            </Text>
            <Card style={styles.card}>
              <AuthForm isLogin />
            </Card>
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
    opacity: 0.55,
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
});

export default LoginScreen;
