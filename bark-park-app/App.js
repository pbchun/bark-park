import React from 'react'
import Home from './components/Home'
import FooterTabs from './components/FooterTabs'
import Login from './components/Login'
import OwnerProfile from './components/OwnerProfile'
import DogParkList from './components/DogParkList'
import SpecificDogPark from './components/SpecificDogPark'
import AddDogProfileForm from './components/AddDogProfileForm'
import { StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import AddDogParkForm from './components/AddDogParkForm';


const App = () => {
    return (
      
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root">

        <Scene key="FooterTabs" component={FooterTabs} />
        
          {/* <Scene style={styles.navTab} key="tabbar" tabs tabBarStyle={{backgroundColor: '#5b89d3'}}>
              <Scene key="home" component={Home} initial />
              <Scene key="ownerProfile" component={OwnerProfile} />
              <Scene key="dogpark" component={DogParkList} />
          </Scene> */}

          <Scene key="Login" component={Login} />
          <Scene key="OwnerProfile" component={OwnerProfile} />
          <Scene key="SpecificDogPark" component={SpecificDogPark} />
          <Scene key="AddDogProfileForm" component={AddDogProfileForm} />

        </Scene>
      </Router>
    )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#5b89d3', 
    paddingTop: 0,
  },
  navTitle: {
    color: 'white'
  }
})

export default App