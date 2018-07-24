import React from 'react'
import AddDogParkForm from './AddDogParkForm'
import FooterTabs from './FooterTabs'
import { Button, StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native'
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
      <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Dog Parks Around Denver</Text>
          {this.state.dogParks.map(park => {
            return(
              <View>
              <ImageBackground style={styles.backgroundImg} source={park.picture}>
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

        <AddDogParkForm listDogParks={this.listDogParks} />
        
        <FooterTabs />
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 30,
    paddingTop: 25,
    marginBottom: 50,
    alignSelf: 'center'
  },
  parkName: {
    fontSize: 15,
    fontWeight: 'bold',
    // alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 15
  },
  address: {
    fontSize: 12,
    // alignSelf: 'center',
    textAlign: 'center',
    paddingBottom: 5
  },
  backgroundImg: {
    width: 400,
    height: 180
  }
})

export default DogParkList