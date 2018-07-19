import React from 'react'
import LoginModal from './LoginModal'
import { StyleSheet, Text, View, NavigatorIOS  } from 'react-native'
import { Actions, Router, Scene, Stack, Button } from 'react-native-router-flux'


class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcomeTitle}>Welcome To Bark Park!</Text>
        <Text style={styles.welcomeMsg}>Dog owners can check in at their favoite dog park and check to see which dogs are currently there using Bark Park. Create a profile for your dog and check in to a dog park as you arrive</Text>
        
        <NavigatorIOS
          initialRoute={{
            component: LoginModal,
            title: 'Login',
          }}
          style={{flex: 1}}
        />
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
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 100
  }
})

export default Home