import React from 'react'
import FooterTabs from './FooterTabs'
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'


class Home extends React.Component {
  render() {
    return (

      <View style={styles.container}>
    <ImageBackground source={require('../public/assets/grass3.png')} style={styles.backgroundImg}>

        <Image source={require('../public/assets/logo.png')} style={styles.logo} />

        <TouchableOpacity style={styles.buttonContainer} onPress={Actions.Login}>
          <Text style={styles.buttonText}>LOGIN TO YOUR PROFILE</Text>
        </TouchableOpacity>

        <FooterTabs />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logo: {
    alignSelf: 'center',
    height: 140,
    width: '95%',
    marginBottom: 80,
    marginTop: 80,
    // paddingTop: 50
    // opacity: 0.7

  },
  buttonContainer: {
    backgroundColor: '#6193BB',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 288,
    borderRadius: 15
    // backgroundColor: 'rgba(0,0,0,.5)',
    // opacity: 0.75
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
  backgroundImg: {

  }
})

export default Home