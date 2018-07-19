import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import OwnerProfile from './components/OwnerProfile'
import DogParkList from './components/DogParkList'
import SpecificDogPark from './components/SpecificDogPark'
import { StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'



const App = () => {
    return (
      
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root">
        
          <Scene style={styles.navTab} key="tabbar" tabs tabBarStyle={{backgroundColor: '#6079a3'}}>
              <Scene key="home" component={Home} initial />
              <Scene key="ownerProfile" component={OwnerProfile} />
              <Scene key="dogpark" component={DogParkList} />
          </Scene>

          <Scene key="Login" component={Login} />
          <Scene key="OwnerProfile" component={OwnerProfile} />
          <Scene key="SpecificDogPark" component={SpecificDogPark} />

        </Scene>
      </Router>
    )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#6079a3', 
    paddingTop: 0,
  },
  navTitle: {
    color: 'white'
  }
})

export default App