import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
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
      size: "",
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

      <ScrollView style={styles.addDogForm}>
        <Text style={styles.addDogTitle}>Add A New Dog</Text> 
        <FormLabel>Dog Name</FormLabel>
        <FormInput onChangeText={this.handleChangeName}/>

        <FormLabel>Picture</FormLabel>
        <FormInput onChangeText={this.handleChangePicture}/>

        <FormLabel>Breed</FormLabel>
        <FormInput onChangeText={this.handleChangeBreed}/>

        <FormLabel>Age</FormLabel>
        <FormInput onChangeText={this.handleChangeAge}/>

        <FormLabel>Gender</FormLabel>
        <FormInput onChangeText={this.handleChangeGender} placeholder="M/F" />

        <FormLabel>Size</FormLabel>
        <FormInput style={styles.lastFormInput} onChangeText={this.handleChangeSize} placeholder="Small/Med/Large" /> 

      <Button
        small
        raised
        onPress={this.handleSubmit}
        title="Submit"
        color="white"
        containerStyle={{ marginTop: 20 }}
      />

    </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  addDogForm: {
    paddingBottom: 150,
    paddingTop: 30
  },
  addDogTitle: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 40
  },
  lastFormInput: {
    marginBottom: 50
  }
})

export default AddDogProfileForm