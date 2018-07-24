import React from 'react'
import { StyleSheet, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView,ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Login = () => {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground source={require('../public/assets/homebackground.jpg')} style={styles.backgroundImg}>
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

        <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.OwnerProfile({})}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButtonContainer}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

      </ImageBackground>
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
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.75)",
    marginBottom: 10,
    color: "#6c6c6d",
    alignSelf: 'center',
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginTop: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
  nextButtonContainer: {
    backgroundColor: '#6079a3',
    width: 150,
    paddingVertical: 15,
    alignSelf: 'center',
    marginTop: 345
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    // opacity: .7
  }
})

export default Login