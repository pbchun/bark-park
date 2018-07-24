import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
// import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base'

class CheckOut extends Component {
  constructor(props) {
    super (props)
    this.state = {
      dogList: []
    }
  }

  deleteDog = (dog, event) => {
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
  }


  render() {
    return (
      <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={this.deleteDog}>Check-Out</Text>
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