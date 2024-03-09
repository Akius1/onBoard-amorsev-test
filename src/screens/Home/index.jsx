// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,

} from "react-native";


export default function HomeScreen() {
 
  return (
    <View style={styles.container}>
      <Text >Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 20,
  },
 
});
