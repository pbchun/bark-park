import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Picker, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'


class AddDogProfileForm extends React.Component {
  constructor(props){
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

  handleChangeName = (text) => {
    const currentValue = text
    this.setState({ name: currentValue })
  }

  handleChangePicture = (text) => {
    const currentValue = text
    this.setState({ picture: currentValue })
  }

  handleChangeBreed = (text) => {
    const currentValue = text
    this.setState({ breed: currentValue })
  }

  handleChangeAge = (text) => {
    const currentValue = text
    this.setState({ age: currentValue })
  }

  handleChangeGender = (text) => {
    const currentValue = text
    this.setState({ gender: currentValue })
  }

  handleChangeSize = (text) => {
    const currentValue = text
    this.setState({ size: currentValue })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch('https://bark-park-db.herokuapp.com/dogprofile', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({ 'content-type': 'application/JSON' })
    })
    .then(response => response.json())
    .then(response => {this.props.listDogs()})
  }

  render() {
    return(

      <View style={styles.addDogForm}>
        <Text style={styles.addDogTitle}>Add A New Dog</Text> 

        <TextInput
          style={styles.input}
          placeholder="Dog Name"
          onChangeText={this.handleChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Picture Link"
          onChangeText={this.handleChangePicture}
        />
        <TextInput
          style={styles.input}
          placeholder="Breed"
          onChangeText={this.handleChangeBreed}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={this.handleChangeAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender - M / F"
          onChangeText={this.handleChangeGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Size - Small / Med / Large"
          onChangeText={this.handleChangeSize}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this.handleSubmit}>SUBMIT</Text>
        </TouchableOpacity>

    </View>

    )
  }
}

const styles = StyleSheet.create({
  addDogForm: {
    // paddingBottom: 150,
    paddingTop: 30
  },
  addDogTitle: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 40,
    paddingBottom: 20
  },
  lastFormInput: {
    marginBottom: 50
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 20,
    color: "#6c6c6d",
    alignSelf: 'center'
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: "700"
  }
})

export default AddDogProfileForm