import React from 'react'
import DogList from './DogList'
import { View, Text, StyleSheet } from 'react-native'

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
      <View>
        <Text style={styles.ownerTitle}>Welcome Peter C!</Text>
        <DogList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ownerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 30
  }
})

export default OwnerProfile