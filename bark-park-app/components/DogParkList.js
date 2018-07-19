import React from 'react'
import AddDogParkForm from './AddDogParkForm'
import { AppRegistry, Button, StyleSheet, View, Text, ScrollView, ActivityIndicator, Image, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modal'

class DogParkList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        dogParks: [],
        isModalVisible: false
      }
  }

  toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });


  listDogParks = () => {
    fetch('https://bark-park-db.herokuapp.com/dogpark')
      .then(response => response.json())
      .then(data => {
        this.setState({
          dogParks: data.dogpark
        })
      })
  }

  componentDidMount() {
      this.listDogParks();
  }

  deleteDogPark = (park, event) => {
    fetch(`https://bark-park-db.herokuapp.com/${park.id}`, {
      method: 'DELETE'
    })
    .then(data => data.text)
    const dogpark = this.state.dogParks.slice()
    const index = dogpark.indexOf(park)
    dogpark.splice(index, 1)
    this.setState({
      dogParks: dogpark
    })
  }
  
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Dog Parks Around Denver:</Text>
          {this.state.dogParks.map(park => {
            return(
              <View>
                <Text style={styles.parkName}>{park.parkName}</Text>
                <Text style={styles.address}>{park.address}</Text>
                <Button
                  onPress={this.deleteDogPark}
                  title="Delete"
                  color="#841584"
                />
              </View>
            )
          })}


          <TouchableHighlight onPress={this.toggleModal}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
          <Modal 
          isVisible={this.state.isModalVisible}
          transparent={false}
          presentationStyle='fullScreen'
          >
            <View style={{ flex: 1 }}>
              <Text>Hello!</Text>
              <TouchableHighlight onPress={this.toggleModal}>
                <Text>Hide me!</Text>
              </TouchableHighlight>
            </View>
          </Modal>



        <AddDogParkForm listDogParks={this.listDogParks} />
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingTop: 20,
    alignSelf: 'center'
  },
  parkName: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 15
  },
  address: {
    fontSize: 12,
    alignSelf: 'center',
    paddingBottom: 5
  }
})

export default DogParkList