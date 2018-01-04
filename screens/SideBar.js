import React from 'react';
import {
	View,
	Text,
	DrawerLayoutAndroid
} from 'react-native';

export default class SideBar extends React.Component{

  render() {
    var navigationView = (
      <View>
        <Text>I am in the drawer</Text>
      </View>
      );
    return(
      <DrawerLayoutAndroid
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
                <Text>Swipe from left to open drawer</Text>
      </DrawerLayoutAndroid>
      );//return
    }//render
  }//SideBar