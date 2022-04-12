import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";
import { AuthContext } from "../utils/auth-context";

const ProfileScreen = () => {
  const authCtx = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View>
          <Text style={styles.cardText}>User - {authCtx.token}</Text>
        </View>
      </Card>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffb347",
  },
  cardText: {
    textAlign: "center",
  },
});
