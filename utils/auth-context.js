import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticate: false,
  authenticate: () => {},
  logout: () => {},
});

export function AuthContentProvider({ children }) {
  const [token, setToken] = useState();
  
  async function authenticate(user) {
    setToken(user);
    await AsyncStorage.setItem("USER", user);
  }

  async function logout() {
    setToken(null);
    await AsyncStorage.removeItem("USER");
  }

  const value = {
    token: token,
    isAuthenticate: !!token,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
