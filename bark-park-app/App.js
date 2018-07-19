import React from 'react'
// import Header from './components/Header'
import Home from './components/Home'
import LoginModal from './components/LoginModal'
import OwnerProfile from './components/OwnerProfile'
import DogParkList from './components/DogParkList'
import { StyleSheet, View, Text, NavigatorIOS } from 'react-native'
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox, } from 'react-native-router-flux'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';



const App = () => {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root">
          <Scene 
            key="tabbar"
            tabs
            tabBarStyle={{backgroundColor: '#6079a3'}}
          >
            <Scene style={styles.navTitle} component={Home} key="home" title="Home">
              <Scene 
              key="home"
              component={Home}
              title="Home"
              initial
              />
            </Scene>
            <Scene style={styles.navTitle} component={LoginModal} key="login" title="Login">
              <Scene 
                key="login"
                component={LoginModal}
                title="Login"
              />
            </Scene>
            <Scene style={styles.navTitle} component={OwnerProfile} key="ownerProfile" title="My Profile">
              <Scene 
                key="ownerProfile"
                component={OwnerProfile}
                title="Profile"
              />
            </Scene>
            <Scene style={styles.navTitle} component={DogParkList} key="dogpark" title="Dog Parks">
              <Scene 
                key="dogpark"
                component={DogParkList}
                title="Dog Parks"
              />
            </Scene>
          </Scene>
          <Scene
            key="modal"
            component={LoginModal}
          />

        </Scene>
      </Router>
    )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#6079a3', 
    paddingTop: 0 
  },
  navTitle: {
    color: 'white'
  }
})

export default App