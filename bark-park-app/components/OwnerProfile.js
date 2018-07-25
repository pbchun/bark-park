import React from 'react'
import DogList from './DogList'
import AddDogProfileForm from './AddDogProfileForm'
import FooterTabs from './FooterTabs'
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'
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
  
  render() {
    return(
    <ImageBackground source={require('../public/assets/grass3.png')} style={styles.backgroundImg}>
      <View style={styles.container}>
        <Text style={styles.ownerTitle}>Welcome {this.getOwnerName()}!</Text>

          <View style={styles.myDogList}>
            {this.state.dogList.filter(dog => {
              return(
                dog.id === 1
              )
            }).map(dog => {
              return(
                <View>
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
              </View>
              )
            })
            }
          </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={Actions.AddDogProfileForm}>
          <Text style={styles.buttonText}>ADD A NEW DOG</Text>
        </TouchableOpacity>
      <FooterTabs style={styles.footer} />
      </View>
      </ImageBackground>
  )
}
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#FFF',
  //   alignContents: 'center'
  // },
  ownerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 30,
    paddingTop: 50
  },
  buttonContainer: {
    backgroundColor: '#6193BB',
    width: 160,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 208,
    marginTop: 50,
    borderRadius: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
  myDogList: {
    alignSelf: 'center',
    marginBottom: 30,
    paddingTop: 20
  },
  dogName: {
    alignSelf: 'center',
    paddingBottom: 4
  },
  eachDog: {
    alignSelf: 'center'
  },
  footer: {
    position: 'absolute'
  },
  backgroundImg: {
    // height: '100%',
    width: '100%'
  }
})

export default OwnerProfile