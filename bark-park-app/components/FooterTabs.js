import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { Actions } from '../node_modules/react-native-router-flux';


export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="menu" />
              <Text>Menu</Text>
              onPress={}
            </Button>
            <Button vertical>
              <Icon name="paw" />
              <Text>My Profile</Text>
              onPress={Actions.OwnerProfile}
            </Button>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}