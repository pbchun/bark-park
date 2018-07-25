import React from 'react'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button, ImageBackground } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'


class SpecificDogPark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allDogs: [],
      myDog: []
    }
  }

  listAllDogs = () => {
    return fetch('https://bark-park-db.herokuapp.com/dogprofile')
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

  filterDogs = (dogId) => {
    return this.state.allDogs.filter(dog => 
        dog.checkedIn === true
    )
  }


  checkIn = (dog) => {
    const newDogs = this.state.checkedInDogs.concat(dog)
    this.setState({
      checkedInDogs: newDogs
    })

  }

  render() {
    return(
      <ScrollView style={styles.container}>
      <View >
      <ImageBackground source={require('../public/assets/railyard1.jpg')} style={styles.railyardImg}>
        <Text style={styles.title}>Rail Yard Dog Park</Text>
        </ImageBackground>

        {this.filterDogs().map(dog => {
          return(
            <View style={styles.dogList} key={dog.id}>
              <Avatar 
                xlarge 
                rounded 
                source={{uri: `${dog.picture}`}}
                style={styles.dogPic} 
              />
              <Text style={styles.dogName}>{dog.name}</Text>
              <Text style={styles.eachDog}>{dog.breed}</Text>
              <Text style={styles.eachDog}>Age: {dog.age}</Text>
              <Text style={styles.eachDog}>Gender: {dog.gender}</Text>
              <Text style={styles.eachDog}>Size: {dog.size}</Text>

              {/* <Button
                  onPress={this.deleteDog}
                  title="Remove"
                  color="#841584"
                />  */}

              </View>
          )
        })}

        <CheckIn listAllDogs={this.listAllDogs} />
        <CheckOut listAllDogs={this.listAllDogs} />
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 215,
    paddingTop: 12,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#252525',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 15
  },
  dogList: {
    alignItems: 'center',
    marginBottom: 50
  },
  dogName: {
    alignSelf: 'center',
    fontSize: 20
  },
  eachDog: {
    alignSelf: 'center'
  },
  railyardImg: {
    height: 250,
    width: 400,
    marginBottom: 45
  }
})

export default SpecificDogPark


  // deleteDog = (dog, event) => {
  //   fetch(`https://bark-park-db.herokuapp.com/${dog.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(data => data.text)
  //   const dogs = this.state.allDogs.slice()
  //   const index = dogs.indexOf(dog)
  //   dogs.splice(index, 1)
  //   this.setState({
  //     allDogs: dogs
  //   })
  // }