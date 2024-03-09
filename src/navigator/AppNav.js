import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

// import { AuthContext } from "../src/context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import MyTabs from "./navigator";
import { OnBoardStack } from "./stackNavigator";
import { AuthContext } from "../context/AuthContext";

export default function AppNav() {
  const { isLoading, userToken, logout } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? <MyTabs logout={logout} /> : <OnBoardStack />}
    </NavigationContainer>
  );
}
