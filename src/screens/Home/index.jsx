import { StyleSheet, Text, View } from "react-native";


export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View>
        <Text>Hello</Text>
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
