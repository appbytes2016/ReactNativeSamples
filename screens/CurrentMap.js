import React from 'react';
import {Text,
		View
	} from 'react-native';

import MapView from 'react-native-maps';

export default class CurrentMap extends React.Component{

	constructor(){
		super();
		this.state={
			location:'unknown',
		}
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				const location=JSON.stringify(position);
				this.setState({location});
			},
			(error)=>alert(error.message),{
				enableHighAccuracy:true,timeout:20000,maximumAge:1000
			}
			);
	}

	render(){
		return(
			<View>
			<Text>Current Map</Text>
			<Text>{this.state.location}</Text>
			</View>
			);
	}
}