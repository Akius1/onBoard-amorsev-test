import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsLoading(true);
    setUserToken("hgkhlsdj;ls");
    AsyncStorage.setItem('userToken','hgkhlsdj;ls')
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async() => {
    try {
        setIsLoading(true)
        let token = await AsyncStorage.getItem("userToken")
        setUserToken(token)
        setIsLoading(false);
    } catch (error) {
        console.log(`isLogged in error ${error}`)
    }
   
  }

  useEffect(()=>{
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
