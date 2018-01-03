import React from 'react';
import {
  Text,
  View
} from 'react-native';
import SideBar from './screens/SideBar';
import Photo from './screens/Photo';

export default class App extends React.Component {
  render() {
    return(
      <View>
      <Text>React Native Samples</Text>
      <Photo />
      </View>
      );
  }
}