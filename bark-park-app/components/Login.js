import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { Action } from 'react-native-router-flux'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.profileLogin = this.profileLogin.bind(this)
  }
  
  profileLogin (selectedIndex) {
    this.setState({selectedIndex})
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login to Your Account</Text>

        <FormLabel>User Name</FormLabel>
        <FormInput />
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}

        <FormLabel style={styles.password}>Password</FormLabel>
        <FormInput />
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
        <Button 
          small
          raised
          rounded
          title="Submit" 
          backgroundColor= 'blue'
          onPress={this.profileLogin} />
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
  login: {
    fontSize: 30,
    paddingBottom: 20
  }
})

export default Login