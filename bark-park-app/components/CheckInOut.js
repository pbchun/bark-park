import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base'

class CheckInOut extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox style={styles.addIcon} checked={true} icon="add" />
            <Body>
              <Text>Check-in</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox style={styles.removeIcon} checked={false} icon="remove"/>
            <Body>
              <Text>Check-out</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  addIcon: {
    color: 'green'
  },
  removeIcon: {
    color: 'red'
  }
})

export default CheckInOut