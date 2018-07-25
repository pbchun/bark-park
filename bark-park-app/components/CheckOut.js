import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

class CheckOut extends Component {
  constructor(props) {
    super (props)
    this.state = {
      name: "",
      picture: "",
      breed: "",
      age: "",
      gender: "",
      size: ""
    }
  }

  checkOut = (event) => {
    event.preventDefault()
    fetch('https://bark-park-db.herokuapp.com/dogprofile/1', {
      method: 'PUT',
      body: JSON.stringify({
        name: this.props.name,
        picture: this.props.picture,
        breed: this.props.breed,
        age: this.props.age,
        gender: this.props.gender,
        size: this.props.size,
        checkedIn: false
      }),
      headers: new Headers({ 'content-type': 'application/JSON' })
    })
    .then(response => response.json())
    .then(response => {this.props.listAllDogs()})
  }


  render() {
    return (
      <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={(event) => this.checkOut(event)}>
        <Text style={styles.buttonText}>Check-Out</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#E84A45',
    width: 100,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 45,
    borderRadius: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
})

export default CheckOut