import React from 'react'
import Home from './components/Home'
import FooterTabs from './components/FooterTabs'
import HeaderNav from './components/HeaderNav'
import Login from './components/Login'
import CheckIn from './components/CheckIn'
import CheckOut from './components/CheckOut'
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

        {/* <Scene key="FooterTabs" component={FooterTabs} /> */}

          {/* <Scene style={styles.navTab} key="tabbar" tabs tabBarStyle={{backgroundColor: '#5b89d3'}}>
              <Scene key="home" component={Home} initial />
              <Scene key="ownerProfile" component={OwnerProfile} />
              <Scene key="dogpark" component={DogParkList} />
          </Scene> */}
          <Scene key="Home" component={Home} initial />
          <Scene key="Login" component={Login} />
          <Scene key="OwnerProfile" component={OwnerProfile} />
          <Scene key="DogParkList" component={DogParkList} />
          <Scene key="SpecificDogPark" component={SpecificDogPark} />
          <Scene key="AddDogProfileForm" component={AddDogProfileForm} />
          <Scene key="CheckIn" component={CheckIn} />
          <Scene key="CheckOut" component={CheckOut} />

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