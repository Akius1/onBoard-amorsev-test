import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";


export default function HomeScreen() {
  const { userInfo } = useContext(AuthContext);
  return (
    <View style={styles.container}>

      <View>
        <Text>Welcome {userInfo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 20,
  },

});
