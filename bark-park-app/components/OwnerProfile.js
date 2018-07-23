import React from 'react'
import DogList from './DogList'
import AddDogProfileForm from './AddDogProfileForm'
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'


class OwnerProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ownerName: [],
      dogList: []
    }
  }
  
  displayOwnerName = () => {
    fetch('https://bark-park-db.herokuapp.com/owner')
    .then(response => response.json())
    .then(data => {
      this.setState({
        ownerName: data.owner
      })
      })
  }

  listYourDogs = () => {
    fetch('https://bark-park-db.herokuapp.com/dogprofile')
      .then(response => response.json())
      .then(data => {
        this.setState({
          dogList: data.dogprofile
        })
      })
  }

  componentDidMount() {
    this.displayOwnerName()
    this.listYourDogs()
  }

  getOwnerName() {
    if (this.state.ownerName.length !== 0) {
    var filteredName = this.state.ownerName.filter(owner => owner.id === 1)
    return JSON.parse(JSON.stringify(filteredName[0].name))
    }
  }
  
  getYourDogs() {
    if (this.state.dogList.length !== 0) {
      var filteredDogList = this.state.dogList.filter(dog => dog.id === 1)
      return (
        JSON.parse(JSON.stringify(filteredDogList[0].name))
        // JSON.parse(JSON.stringify(filteredDogList[0].breed)),
        // JSON.parse(JSON.stringify(filteredDogList[0].age)),
        // JSON.parse(JSON.stringify(filteredDogList[0].gender)),
        // JSON.parse(JSON.stringify(filteredDogList[0].size))
      )
    }
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.ownerTitle}>Welcome {this.getOwnerName()}!</Text>

          <View style={styles.myDogList} >
            <Avatar 
              large 
              rounded 
              source={{uri: `{dog.picture}`}}
              style={styles.dogPic} 
            />
            <Text style={styles.dogName}>{this.getYourDogs()}</Text>
            {/* <Text style={styles.eachDog}>{dog.breed}</Text>
            <Text style={styles.eachDog}>Age: {dog.age}</Text>
            <Text style={styles.eachDog}>Gender: {dog.gender}</Text>
            <Text style={styles.eachDog}>Size: {dog.size}</Text> */}

            {/* <Button
                onPress={this.deleteDog}
                title="Remove"
                color="#841584"
              />  */}
          </View>

        {/* <DogList /> */}
        {/* <AddDogProfileForm listDogs={this.listDogs} /> */}
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={Actions.AddDogProfileForm}>Add a New Dog</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7'
  },
  ownerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 30,
    paddingTop: 20
  },
  buttonContainer: {
    backgroundColor: '#6079a3',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 40
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
  myDogList: {
    alignSelf: 'center',
    marginBottom: 15
  },
  dogName: {
    alignSelf: 'center',
    paddingBottom: 4
  }
})

export default OwnerProfile