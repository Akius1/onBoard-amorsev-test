import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [emailRes, setEmailRes] = useState(null);

  const login = (email, password, setErrors) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        setUserInfo(res.data?.user?.name);
        setUserToken(res.data.token);
        AsyncStorage.setItem("userToken", res.data.token);
        AsyncStorage.setItem("userInfo", res.data?.user?.name);
      })
      .catch((e) => {
        console.log("error", e);
        let errors = {};
        if (e) {
          errors.login = "Email or Password Incorrect";
          setErrors(errors);
        }
      });
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLogged in error ${error}`);
    }
  };

  const signup = (username, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signup`, {
        name: username,
        email,
        password,
      })
      .then((res) => {
        setUserInfo(res.data?.userDataSent?.name);
        setUserToken(res.data.token);
        AsyncStorage.setItem("userToken", res.data.token);
        AsyncStorage.setItem("userInfo", res.data?.userDataSent?.name);
      })
      .catch((e) => {
        console.log("error", e);
      });
    setIsLoading(false);
  };

  const profile = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        setUserInfo(res.data?.name);
        setEmailRes(res.data?.email);
      })
      .catch((e) => {
        console.log("error", e);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        signup,
        profile,
        emailRes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
