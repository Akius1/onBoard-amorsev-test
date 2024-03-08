// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {};
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(reg.test(email) === false) errors.email = "Email is not correct"
    if(!email) errors.email  = "Email is required";
    if(!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () =>{
    if(validateForm()){
      console.log("Submitted", email, password);

      setEmail("");
      setPassword("");
      setErrors({});
    }
  }
  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
      <View style = {styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter your email' value={email} onChangeText={setEmail} />
        {
          errors.email  && <Text style={styles.errorText}>{errors.email}</Text>
        }
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword}/>

        {
          errors.password  && <Text style={styles.errorText}>{errors.password}</Text>
        }
        <Button title='login' onPress={() => {handleSubmit()}}  />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form:{
    backgroundColor: '#white',
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:  "bold"
  },
  input:{
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText:{
    color: "red",
    marginBottom: 10
  }

  });
