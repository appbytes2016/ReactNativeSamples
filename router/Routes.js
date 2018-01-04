import React from 'react';
import {Router,Scene} from 'react-native-router-flux';
import MainScreen from '../screens/MainScreen';
import DatePick from '../screens/DatePick';
import Photo from '../screens/Photo';
import CurrentMap from '../screens/CurrentMap';
import SideBar from '../screens/SideBar';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {MainScreen} title = "Home" initial = {true} />
         <Scene key = "camera" component = {Photo} title = "Camera"  />
         <Scene key = "sidebar" component = {SideBar} title = "SideBar"  />
         <Scene key = "map" component = {CurrentMap} title = "Current Location on Map"  />
         <Scene key = "date" component = {DatePick} title = "Date Picker" />
      </Scene>
   </Router>
)
export default Routes