import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export const OnBoardStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#7AD7F0" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#000",
        contentStyle: { backgroundColor: "#e8e4f3" },
       
        // headerShown: false
        
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{
          name: "Login",
        }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        initialParams={{
          name: "SignUp",
        }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};
