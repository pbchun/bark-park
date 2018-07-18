import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class OwnerProfile extends React.Component {
  
  
  render() {
    return(
      <View>
        <Text style={styles.ownerTitle}>Welcome Peter!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ownerTitle: {
    fontSize: 30,
    alignSelf: 'center'
  }
})

export default OwnerProfile