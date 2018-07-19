import React from 'react'
import DogList from './DogList'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

class DogProfileEditModal extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      newName: "",
      newPicture: "",
      newBreed: "",
      newAge: "",
      newGender: "",
      newSize: "",
    }
  }

  showProfileEditModal = () => {
    this.refs.myModal.open()
  }

  // handleChangeName = (text) => {
  //   const currentValue = text
  //   this.setState({ name: currentValue })
  // }

  // handleChangePicture = (text) => {
  //   const currentValue = text
  //   this.setState({ picture: currentValue })
  // }

  // handleChangeBreed = (text) => {
  //   const currentValue = text
  //   this.setState({ breed: currentValue })
  // }

  // handleChangeAge = (text) => {
  //   const currentValue = text
  //   this.setState({ age: currentValue })
  // }

  // handleChangeGender = (text) => {
  //   const currentValue = text
  //   this.setState({ gender: currentValue })
  // }

  // handleChangeSize = (text) => {
  //   const currentValue = text
  //   this.setState({ size: currentValue })
  // }

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
      <Modal 
        ref={'myModal'}
        position='center'
        backdrop={true}
        onClosed={() => {
          alert('Modal Closed')
        }}
        style={styles.modalContainer}
      >
        <Text>Edit Your Dog's Information</Text>

        <TextInput
          style={styles.input}
          placeholder="Dog Name"
          onChangeText={(text) => this.setState({ newName: text })}
          value={this.state.newName}
        />
        <TextInput
          style={styles.input}
          placeholder="Picture Link"
          onChangeText={(text) => this.setState({ newPicture: text })}
          value={this.state.newPicture}
        />
        <TextInput
          style={styles.input}
          placeholder="Breed"
          onChangeText={(text) => this.setState({ newBreed: text })}
          value={this.state.newBreed}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={(text) => this.setState({ newAge: text })}
          value={this.state.newAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender - M / F"
          onChangeText={(text) => this.setState({ newGender: text })}
          value={this.state.newGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Size - Small / Med / Large"
          onChangeText={(text) => this.setState({ newSize: text })}
          value={this.state.newSize}
        />

        <Button 
          style={styles.button}
          onPress={this.handleSubmit}
        >
        Save
        </Button>

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    borderRadius: 30,
    shadowRadius: 10,
    // width: screen.width -80,
    height: 280
  },

})

export default DogProfileEditModal