import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import IconButton from "./UI/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContentProvider from "../utils/auth-context";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#553C18",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen
        name="App"
        component={MyTabs}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit-outline"
              color={tintColor}
              size={24}
              onPress={() => {
                AsyncStorage.removeItem("User");
                navigation.replace("Login");
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#553C18"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor: "silver",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={FavoriteScreen}
        options={{
          tabBarColor: "violet",
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dine"
        component={CartScreen}
        options={{
          tabBarColor: "#B247FF",
          tabBarLabel: "Dine",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarColor: "#ffb347ae",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navbar() {
  return (
    <AuthContentProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthContentProvider>
  );
}
