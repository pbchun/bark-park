import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text } from 'native-base'


export default class HeaderLogo extends Component {
  render() {
    return (

      
      <Container style={{backgroundColor: "#87cefa"}}>
        <Header transparent>

          <Body>
      <Image style={styles.headerLogo} source={require('../public/assets/barkparklogo.png')} />
          </Body>

        </Header>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   height: 1
  // },
  headerLogo: {
    height: 50,
    width: 300
  }
})