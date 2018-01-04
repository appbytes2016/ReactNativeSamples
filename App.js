import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Routes from './router/Routes';
import DatePick from './screens/DatePick';
import Photo from './screens/Photo';
import CurrentMap from './screens/CurrentMap';
import SideBar from './screens/SideBar';
import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
  render() {
    return(
    	<Routes />
      );
  }
}