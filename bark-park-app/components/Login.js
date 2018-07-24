import React from 'react'
import { StyleSheet, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Login = () => {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.login}>Login to Your Account</Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor="#6c6c6d"
          returnKeyType="next"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#6c6c6d"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => Actions.OwnerProfile({})}>LOGIN</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    width: 180,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 20,
    color: "#6c6c6d",
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 180,
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF",
    // fontWeight: "700"
  }
})

export default Login