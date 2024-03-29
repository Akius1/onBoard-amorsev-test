import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";


export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const { signup } = useContext(AuthContext);

  const validateForm = () => {
    let errors = {};
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(!username) errors.username = "Username is required";
    if (reg.test(email) === false) errors.email = "Email is not correct";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, email, password);
      signup(username,email,password)
      setUsername("")
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <StatusBar style="light"></StatusBar>
      {/* <Image style={styles.image} source={require('../../../assets/appBg.jpeg')} /> */}
      <View style={styles.form}>
      <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor={"gray"}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={"gray"}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          placeholderTextColor={"gray"}
          onChangeText={setPassword}
        />

        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <Button
        style={styles.login}
          title="Sign up"
          onPress={() => {
            handleSubmit();
          }}
        />
        <View style={styles.signup}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push('Login')}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBF3FA",
    // alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  image: {
    height: "100%",
    position: "absolute",
    width: "100%",
    objectFit: "cover",
  },
  login:{
    marginBottom: 15
  },
  signup:{
    marginTop: 15,
flexDirection: "row",
justifyContent: "center",
  },
  signUpText:{
    color: "#7AD7F0"
  }
});
