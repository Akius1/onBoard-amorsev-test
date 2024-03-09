import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Login from "../Views/Login";
// import SignUp from "../views/SignUp";
import HomeScreen from "../screens/Home";
import Profile from "../screens/Profile";
import About from "../screens/About";
import Resources from "../screens/Resources";
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            // tabBarShowLabel
            tabBarLabelPosition: "below-icon",
            tabBarActiveTintColor: "purple"
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}  options={{
                // tabBarLabel: "Home",
                tabBarIcon: () => <Ionicons name={"home"} size={20} />
            }}/>
            {/* <Tab.Screen name="Login" component={Login}  options={{
                // tabBarLabel: "Home",
                tabBarIcon: () => <Ionicons name={"log-in"} size={20} />
            }}/> */}
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "Profile",
                tabBarIcon: () => <Ionicons name={"person"} size={20} />
            }}/>
            <Tab.Screen name="About" component={About} options={{
                tabBarLabel: "About",
                tabBarIcon: () => <Ionicons name={"paper-plane-outline"} size={20} />
            }}/>
            {/* <Tab.Screen name="SignUp" component={SignUp} /> */}
            <Tab.Screen name="Resources" component={Resources} options={{
                // tabBarLabel: "Home",
                tabBarIcon: () => <Ionicons name={"list"} size={20} />
            }} />
        </Tab.Navigator>
    )
}

export default MyTabs