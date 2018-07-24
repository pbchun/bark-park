import React from 'react'
import Login from './Login'
import FooterTabs from './FooterTabs'
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux'


class Home extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      <View>
        {/* <ImageBackground style={styles.backgroundImg} source={require('.')} */}
        <Image source={require('../public/assets/barkparklogo.png')} style={styles.logo} />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={Actions.Login}>LOGIN TO YOUR PROFILE</Text>
        </TouchableOpacity>

        <FooterTabs />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 145,
    width:370,
    marginBottom: 200,
    marginTop: 150
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 93
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0
  }
})

export default Home