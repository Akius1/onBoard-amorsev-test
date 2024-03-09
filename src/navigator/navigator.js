import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Login from "../Views/Login";
// import SignUp from "../views/SignUp";
import HomeScreen from "../screens/Home";
import Profile from "../screens/Profile";
import About from "../screens/About";
import Resources from "../screens/Resources";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text } from "react-native";

const Tab = createBottomTabNavigator();

function MyTabs({ logout }) {
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "purple",
        headerRight: () => (
          <Pressable onPress={() => logout()}>
            <Text
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Ionicons name={"log-out"} size={20} />{" "}
            </Text>
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name={"home"} size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <Ionicons name={"person"} size={20} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: () => <Ionicons name={"paper-plane-outline"} size={20} />,
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarIcon: () => <Ionicons name={"list"} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
