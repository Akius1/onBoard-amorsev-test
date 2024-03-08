import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Views/Login";
import SignUp from "../views/SignUp";
import HomeScreen from "../views/Home";
import Profile from "../views/Profile";
import About from "../views/About";
import Resources from "../views/Resources";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="SignUp" component={SignUp} />
            <Tab.Screen name="Resources" component={Resources} />
        </Tab.Navigator>
    )
}

export default MyTabs