import React from 'react'
// import Header from './components/Header'
import Home from './components/Home'
// import Login from './components/Login'
import OwnerProfile from './components/OwnerProfile'
import DogParkList from './components/DogParkList'
import { StyleSheet, View, Text } from 'react-native'
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox, } from 'react-native-router-flux'


const TabIcon = ({ selected, title }) => {
  return(
    <Text style={{color: selected ? 'blue' :'black'}}>{title}</Text>
  )
}

const App = () => {
    return (
      <Router>
        <Scene key="root">

          <Scene 
            key="tabbar"
            tabs
            tabBarStyle={{backgroundColor: 'darkgray'}}
          >
            <Scene key="home" title="Home" icon={TabIcon}>
              <Scene 
              key="home"
              component={Home}
              title="Home"
              initial
              />
            </Scene>
            <Scene key="ownerProfile" title="My Profile" icon={TabIcon}>
              <Scene 
                key="ownerProfile"
                component={OwnerProfile}
                title="Profile"
              />
            </Scene>
            <Scene key="dogpark" title="Dog Parks" icon={TabIcon}>
              <Scene 
                key="dogpark"
                component={DogParkList}
                title="Dog Parks"
              />
            </Scene>
          </Scene>

          {/* <Scene 
          key="login"
          component={Login}
          >
          </Scene> */}

        </Scene>
      </Router>
    )
}

export default App