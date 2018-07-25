import React from 'react'
// import AddDogParkForm from './AddDogParkForm'
import FooterTabs from './FooterTabs'
import { Button, StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class DogParkList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        dogParks: [],
      }
  }

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

  // deleteDogPark = (park, event) => {
  //   fetch(`https://bark-park-db.herokuapp.com/${park.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(data => data.text)
  //   const dogpark = this.state.dogParks.slice()
  //   const index = dogpark.indexOf(park)
  //   dogpark.splice(index, 1)
  //   this.setState({
  //     dogParks: dogpark
  //   })
  // }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Denver Dog Parks</Text> */}
          {this.state.dogParks.map(park => {
            return(
              <View>
              <ImageBackground style={styles.backgroundImg} source={{uri : park.picture}}>
                <Text 
                  style={styles.parkName}
                  onPress={() => Actions.SpecificDogPark({})}
                  >
                  {park.parkName}
                </Text>
                <Text style={styles.address}>{park.address}</Text>
                </ImageBackground>
                {/* <Button
                  onPress={this.deleteDogPark}
                  title="Delete"
                  color="#841584"
                /> */}
              
            </View>
            )
          })}
        {/* <AddDogParkForm listDogParks={this.listDogParks} /> */}

        <TouchableOpacity style={styles.buttonContainer} onPress={Actions.AddDogParkForm}>
          <Text style={styles.buttonText}>ADD A NEW DOG PARK</Text>
        </TouchableOpacity>

        <FooterTabs />
      </ View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignContent: 'center'
  },
  title: {
    fontSize: 30,
    marginTop: 4,
    marginBottom: 4,
    alignSelf: 'center'
  },
  parkName: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 135,
    paddingLeft: 4,
    color: 'white',
    textShadowColor: '#252525',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 15
  },
  address: {
    fontSize: 12,
    paddingLeft: 4, 
    color: "white",
    textShadowColor: '#252525',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 15

  },
  backgroundImg: {
    width: 400,
    height: 180,
    // opacity: 0.5
  },
  buttonContainer: {
    backgroundColor: '#6193BB',
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 24,
    borderRadius: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  },
})

export default DogParkList