import React from 'react'
import Login from './Login'
import { StyleSheet, Text, View,  } from 'react-native'
import { Actions, Router, Scene, Stack, Button } from 'react-native-router-flux'


class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcomeTitle}>Welcome To Bark Park!</Text>
        <Text style={styles.welcomeMsg}>Dog owners can check in at their favoite dog park and check to see which dogs are currently there using Bark Park. Create a profile for your dog and check in to a dog park as you arrive</Text>
        <Button onPress={() => Actions.login({data: "custom data", title: "Home"})}>Login</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeTitle: {
    fontSize: 30,
    paddingTop: 30,
    alignSelf: 'center'
  },
  welcomeMsg: {
    padding: 40,
    alignSelf: 'center'
  },
  loginLink: {

  }
})

export default Home