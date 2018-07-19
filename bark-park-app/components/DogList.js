import React from 'react'
import { View, Text, StyleSheet, ScrollView, Button, KeyboardAvoidingView, Modal } from 'react-native'
import { Avatar } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'


class DogList extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      dogList: []
    }
  }

  listDogs = () => {
    fetch('https://bark-park-db.herokuapp.com/dogprofile')
      .then(response => response.json())
      .then(data => {
        this.setState({
          dogList: data.dogprofile
        })
      })
  }

  componentDidMount() {
    this.listDogs()
  }

  deleteDog = (dog, event) => {
    fetch(`https://bark-park-db.herokuapp.com/${dog.id}`, {
      method: 'DELETE'
    })
    .then(data => data.text)
    const dogs = this.state.dogList.slice()
    const index = dogs.indexOf(dog)
    dogs.splice(index, 1)
    this.setState({
      dogList: dogs
    })
  }

  render() {
    return(
      <View>
        {this.state.dogList.map(dog => {
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

              <Button
                  onPress={this.deleteDog}
                  title="Remove"
                  color="#841584"
                /> 
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dogListTitle: {
    fontSize: 25,
    alignSelf: 'center',
    // paddingBottom: 30
  },
  dogList: {
    alignItems: 'center',
    marginBottom: 15
  },
  dogPic: {
    alignSelf: 'center',
    paddingBottom: 30
  },
  dogName: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  eachDog: {
    alignSelf: 'center',
    paddingBottom: 4
  }
})


export default DogList