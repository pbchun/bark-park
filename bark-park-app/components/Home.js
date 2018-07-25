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
          <Text style={styles.buttonText}>LOGIN</Text>
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
    backgroundColor: '#FFF',
    width: '100%'
  },
  logo: {
    alignSelf: 'center',
    height: 140,
    width:375,
    marginBottom: 279,
    marginTop: 130,
    // paddingTop: 50
    // opacity: 0.7

  },
  buttonContainer: {
    backgroundColor: '#F19F4D',
    width: 150,
    paddingVertical: 12,
    alignSelf: 'center',
    marginBottom: 45,
    borderRadius: 8,
    opacity: 0.9
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '500'
  },
  backgroundImg: {
    width: '100%'
  }
})

export default Home