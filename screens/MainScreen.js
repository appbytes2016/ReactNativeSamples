import React from 'react';
import {Text,View,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class MainScreen extends React.Component{
	render(){
		return(
			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Text>Main Screen</Text>
				<Button title='Camera' onPress={Actions.camera}/>
				<View style={{height:10}} />
				<Button title='SideBar' onPress={Actions.sidebar}/>
				<View style={{height:10}} />
				<Button title='Date Picker' onPress={Actions.date}/>
				<View style={{height:10}} />
				<Button title='Current Location on Map' onPress={Actions.map}/>
				<View style={{height:10}} />
			</View>
			)
	}
}