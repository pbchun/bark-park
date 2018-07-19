import React from 'react'
import OwnerProfile from './OwnerProfile'
import { StyleSheet, Text, View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'


// class LoginModal extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       selectedIndex: 2
//     }
//     this.profileLogin = this.profileLogin.bind(this)
//   }
  
//   profileLogin (selectedIndex) {
//     this.setState({selectedIndex})
//   }
const LoginModal = () => {

  // render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login to Your Account</Text>

        <FormLabel>User Name</FormLabel>
        <FormInput />

        <FormLabel>Password</FormLabel>
        <FormInput style={styles.password}/>
        
        <Button 
          small
          raised
          title="Submit" 
          color= 'white'
          // onPress={this.profileLogin} 
          onPress={() => Actions.OwnerProfile()}
          />
      </View>
    )
  // }
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
    marginBottom: 20
  }
})

export default LoginModal