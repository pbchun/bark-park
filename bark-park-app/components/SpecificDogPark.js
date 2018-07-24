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
    console.log("Hi")
  }

  filterDogs = (dogId) => {
    return this.state.allDogs.filter(dog => 
        dog.checkedIn === true
    )
  }


  checkIn = (dog) => {
    console.log("Here", dog)
    const newDogs = this.state.checkedInDogs.concat(dog)
    this.setState({
      checkedInDogs: newDogs
    })

  }

  render() {
    return(
      <View style={styles.container}>
      <ImageBackground source={require('../public/assets/railyard1.jpg')} style={styles.railyardImg}>
        <Text style={styles.title}>Rail Yard Dog Park</Text>
        </ImageBackground>
        {/* <CheckIn id={dog.id} name={dog.name} picture={dog.picture} breed={dog.breed} age={dog.age} gender={dog.gender} size={dog.size} listAllDogs={this.listAllDogs} /> */}
      <ScrollView>
        <CheckIn checkIn={this.checkIn} updateDogs={this.componentDidMount} listAllDogs={this.listAllDogs} />
        <CheckOut />

        {this.filterDogs().map(dog => {
          return(
            <View style={styles.dogList} key={dog.id}>
              <Avatar 
                large 
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

      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 215,
    paddingTop: 10,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.5)'
  },
  dogList: {
    alignItems: 'center',
    marginBottom: 50
  },
  dogName: {
    alignSelf: 'center',
    fontSize: 15
  },
  eachDog: {
    alignSelf: 'center'
  },
  railyardImg: {
    height: 250,
    width: 400
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