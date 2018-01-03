import React from 'react';
import {View,Text,Dimensions} from 'react-native';
import Camera from 'react-native-camera';

export default class Photo extends React.Component{

	
	render(){
		const styles={
		preview:{
			height:Dimensions.get('window').height,
			width:Dimensions.get('window').width
		}
	}
		return(
			<Camera
			style={styles.preview}>
			<Text>Capture</Text>
			</Camera>
		);
	}
}