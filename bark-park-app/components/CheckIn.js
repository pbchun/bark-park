import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native'
import { Avatar } from 'react-native-elements'
// import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base'

class CheckIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      picture: "",
      breed: "",
      age: "",
      gender: "",
      size: ""
    }
  }


  handleCheckIn = (event) => {
    event.preventDefault()
    console.log("Test")
    fetch('https://bark-park-db.herokuapp.com/dogprofile/1', {
      method: 'PUT',
      body: JSON.stringify({
        name: this.props.name,
        picture: this.props.picture,
        breed: this.props.breed,
        age: this.props.age,
        gender: this.props.gender,
        size: this.props.size,
        checkedIn: true
      }),
      headers: new Headers({ 'content-type': 'application/JSON' })
    })
    .then(response => response.json())
    .then(response => {this.props.listAllDogs()})
    
  }

  render() {
    return (
      <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={(event) => this.handleCheckIn(event)}>
        <Text style={styles.buttonText} >Check-In</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0FAF04',
    width: 100,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
})

export default CheckIn