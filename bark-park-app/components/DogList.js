import React from 'react'
import AddDogProfileForm from './AddDogProfileForm'
import EditDogInfoModal from './EditDogInfoModal'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import { Avatar } from 'react-native-elements'

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
      <ScrollView>
        {/* <Text style={styles.dogListTitle}>Your Dogs:</Text> */}
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
              <View>
                {/* <EditDogInfoModal name={dog.name} picture={dog.picture} breed={dog.breed} age={dog.age} gender={dog.gender} size={dog.size} listDogs={this.listDogs} /> */}
              </View>
              <Button
                  onPress={this.deleteDogPark}
                  title="Delete"
                  color="#841584"
                /> 
            </View>
          )
        })}
        
        <AddDogProfileForm listDogs={this.listDogs} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  dogListTitle: {
    fontSize: 25,
    alignSelf: 'center',
    paddingBottom: 30
  },
  dogList: {
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'darkgrey',
    borderRadius: 25,
    padding: 20,
    width: 200
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