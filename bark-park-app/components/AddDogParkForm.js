import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'


class AddDogParkForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      parkName: "",
      address: ""
    }
  }

  handleChangeName = (text) => {
    const currentValue = text
    this.setState({ parkName: currentValue })
  }

  handleChangeAddress = (text) => {
    const currentValue = text
    this.setState({ address: currentValue })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('https://bark-park-db.herokuapp.com/dogpark', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({ 'content-type': 'application/JSON' })
    })
    .then(response => response.json())
    .then(response => {this.props.listDogParks()})
  }

  render() {
    return(
      <View style={styles.addParkForm}>
        <Text style={styles.addParkTitle}>Add A Dog Park</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Dog Park Name"
          onChangeText={this.handleChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={this.handleChangeAddress}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this.handleSubmit}>SUBMIT</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addParkForm: {
    // paddingBottom: 150,
    paddingTop: 30
  },
  addParkTitle: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 40,
    paddingBottom: 25
  },
  input: {
    width: 180,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 20,
    color: "#6c6c6d",
    alignSelf: 'center'
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 180,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 80,
    borderRadius: 8,
    opacity: 0.8
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }
})

export default AddDogParkForm