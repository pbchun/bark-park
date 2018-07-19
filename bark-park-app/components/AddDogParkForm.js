import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'


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
      <View>
        <Text style={styles.addParkTitle}>Add A Dog Park</Text>
        <FormLabel>Dog Park Name</FormLabel>
        <FormInput onChangeText={this.handleChangeName}/>

        <FormLabel>Dog Park Address</FormLabel>
        <FormInput onChangeText={this.handleChangeAddress}/>

        <Button
          small
          raised
          onPress={this.handleSubmit}
          title="Submit"
          color="white"
          containerStyle={{ marginTop: 20 }}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addParkTitle: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 40
  }
})

export default AddDogParkForm