import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { Actions } from '../node_modules/react-native-router-flux';


class FooterTabs extends Component {

  render() {
    return (
      <Container>
        {/* <Content /> */}
        <Footer style={styles.Footer}>
          <FooterTab>
            <Button vertical onPress={Actions.Home}>
              <Icon style={styles.footerIcon} name="home" />
              <Text style={styles.footerText}>Home</Text>
            </Button>
            <Button vertical onPress={Actions.OwnerProfile} >
              <Icon style={styles.footerIcon} name="person" />
              <Text style={styles.footerText}>My Profile</Text>
            </Button>
            <Button vertical onPress={Actions.DogParkList}>
              <Icon style={styles.footerIcon} name="paw" />
              <Text style={styles.footerText}>Dog Parks</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#6079a3',
    position: 'fixed'
  },
  footerText: {
    color: '#FFF'
  },
  footerIcon: {
    color: '#FFF'
  }
})

export default FooterTabs