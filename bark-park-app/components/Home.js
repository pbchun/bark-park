import React from 'react'
// import Login from './Login'
import { StyleSheet, Text, View, NavigatorIOS, Button, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'


class Home extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        {/* <Text style={styles.welcomeTitle}>Welcome To Bark Park!</Text> */}
        <Image source={require('../public/assets/logo.png')} style={styles.logo} />
        {/* <Text style={styles.welcomeMsg}>Dog owners can check in at their favoite dog park and check to see which dogs are currently there using Bark Park. Create a profile for your dog and check in to a dog park as you arrive</Text> */}

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={Actions.Login}>LOGIN TO YOUR PROFILE</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
    width: 350,
    marginBottom: 150
  },
  header: {
    width: 500
  },
  // welcomeTitle: {
  //   fontSize: 30,
  //   paddingTop: 30,
  //   paddingBottom: 20,
  //   alignSelf: 'center'
  // },
  welcomeMsg: {
    padding: 40,
    alignSelf: 'center'
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 40
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }
})

export default Home