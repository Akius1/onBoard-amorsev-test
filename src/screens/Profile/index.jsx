import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { profile, emailRes, userInfo } = useContext(AuthContext);
  useEffect(()=>{
    profile()
  },[])
  return (
    <View style={styles.container}>
      <Text>Username: {userInfo} </Text>
      <Text>Email: {emailRes} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
