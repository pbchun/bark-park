import React from 'react'
import DogList from './DogList'
import AddDogProfileForm from './AddDogProfileForm'
import { ScrollView, Text, StyleSheet } from 'react-native'

class OwnerProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ownerName: [],
    }
  }

  displayOwnerName = () => {
    fetch('https://bark-park-db.herokuapp.com/owner/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          ownerName: data.owner
        })
      })
  }

  componentDidMount() {
    this.displayOwnerName()
  }
  
  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.ownerTitle}>Welcome Peter C!</Text>
        <DogList />
        <AddDogProfileForm listDogs={this.listDogs} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc'
  },
  ownerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 30
  }
})

export default OwnerProfile