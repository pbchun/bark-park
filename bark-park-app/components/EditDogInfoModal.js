import React from 'react'
import OwnerProfile from './OwnerProfile'
import { StyleSheet, Text, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Modal from 'react-native-modal'


class EditDogInfoModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      picture: this.props.picture,
      breed: this.props.breed,
      age: this.props.age,
      gender: this.props.gender,
      size: this.props.size,
      isModalVisible: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  componentWillMount() {
    Modal.setAppElement('body');
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange = (event) => {
    const currentValue = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: currentValue });
  }

  handleSave = (event) => {
    event.preventDefault();
    fetch(`https://bark-park-db.herokuapp.com/dogprofile/${this.props.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.name,
        picture: this.state.picture,
        breed: this.state.breed,
        age: this.state.age,
        gender: this.state.gender,
        size: this.state.size
      }),
      headers: new Headers({ "content-type": "application/JSON" })
    })
    .then(response => response.json())
    .then(() => this.toggle())
    .then(response => {this.props.listDogs()});
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
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

export default EditDogInfoModal