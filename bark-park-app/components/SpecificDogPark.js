import React from 'react'
import CheckInOut from './CheckInOut'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'


class SpecificDogPark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allDogs: [],
      myDog: []
    }
  }

  listAllDogs = () => {
    fetch('https://bark-park-db.herokuapp.com/dogprofile')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allDogs: data.dogprofile
        })
      })
  }

  componentDidMount() {
    this.listAllDogs()
  }

  checkIn = () => {
    fetch('https://bark-park-db.herokuapp.com/dogprofile/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          myDog: data.dogproile.id === 1
        })
      })
      .then(response => {this.props.listAllDogs()})

  }

  render() {
    return(
      <ScrollView>
        <Text style={styles.title}>Rail Yard Dog Park</Text>

        <TouchableOpacity style={styles.checkInButtonContainer}>
          <Text style={styles.checkInButton} onPress={this.checkIn}>Check-in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkOutButtonContainer}>
          <Text style={styles.checkOutButton} onPress={this.checkOut}>Check-out</Text>
        </TouchableOpacity>

        {this.state.allDogs.filter(dog => {
          return (
            dog.id >= 2
          )
        }).map(dog => {
          return(
            <View style={styles.dogList} key={dog.id}>
              <Avatar 
                large 
                rounded 
                source={{uri: `{dog.picture}`}}
                style={styles.dogPic} 
              />
              <Text style={styles.dogName}>{dog.name}</Text>
              <Text style={styles.eachDog}>{dog.breed}</Text>
              <Text style={styles.eachDog}>Age: {dog.age}</Text>
              <Text style={styles.eachDog}>Gender: {dog.gender}</Text>
              <Text style={styles.eachDog}>Size: {dog.size}</Text>
              </View>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: 'bold'
  },
  dogList: {
    alignItems: 'center',
    paddingBottom: 20
  },
  dogName: {
    alignSelf: 'center',
    fontSize: 15
  },
  eachDog: {
    alignSelf: 'center'
  },
  checkInButtonContainer: {
    backgroundColor: '#57BC90',
    width: 100,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 10
  },
  checkInButton: {
    textAlign: 'center',
    color: '#3d3d3d',
    fontWeight: "700"
  },
  checkOutButtonContainer: {
    backgroundColor: '#CF6766',
    width: 100,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 30
  },
  checkOutButton: {
    textAlign: 'center',
    color: '#3d3d3d',
    fontWeight: "700"
  }
})

export default SpecificDogPark