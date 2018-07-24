import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

class CheckOut extends Component {
  constructor(props) {
    super (props)
    this.state = {
      dogList: []
    }
  }

  checkOut = (dog, event) => {
    fetch('https://bark-park-db.herokuapp.com/dogprofile/1', {
      method: 'DELETE'
    })
    .then(data => data.text)
    const dogs = this.state.dogList.slice()
    const index = dogs.indexOf(dog)
    dogs.splice(index, 1)
    this.setState({
      dogList: dogs
    })
    .then(response => {this.props.listAllDogs()})
  }


  render() {
    return (
      <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={this.checkOut}>
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
    marginBottom: 45
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
})

export default CheckOut