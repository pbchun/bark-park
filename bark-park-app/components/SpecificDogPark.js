import React from 'react'
import CheckInOut from './CheckInOut'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'


class SpecificDogPark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allDogs: []
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

  render() {
    return(
      <View>
        <Text style={styles.title}>Rail Yard Dog Park</Text>
        <CheckInOut />
        {this.state.allDogs.map(dog => {
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 30
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
  }
})

export default SpecificDogPark