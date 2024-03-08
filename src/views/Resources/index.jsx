import { StyleSheet, Text, View } from "react-native";

export default function Resources() {
  return (
    <View style={styles.container}>
      <Text>Welcome Andrew</Text>
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
