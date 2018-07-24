import React from 'react'
import HeaderLogo from './HeaderLogo'
import FooterTabs from './FooterTabs'
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'


class Home extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      {/* <HeaderLogo /> */}
        <ImageBackground source={require('../public/assets/grass.png')} style={styles.backgroundImg}>

        <Image source={require('../public/assets/barkparklogo.png')} style={styles.logo} />

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
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 145,
    width: '100%',
    marginBottom: 100,
    marginTop: 80,
    opacity: 0.7

  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 263,
    // backgroundColor: 'rgba(0,0,0,.5)',
    opacity: 0.75
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
  },
  backgroundImg: {
    // height: '100%',
    width: '100%',
  }
})

export default Home