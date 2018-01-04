import React from 'react';

import {
	Text,
	View,
	Button,
	Dimensions,
	TouchableHighlight,
	Image
} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class MainScreen extends React.Component{
	render(){

		const styles={
			icon:{
				width:50,
				height:50
			},
			text:{
				fontSize:40,
				color:'#ffffff'
			},
			view:{
				width:Dimensions.get('window').width-50,
				backgroundColor:'#1a9187'
			}
		}

		return(
			<View>

				<View style={{flexDirection:'row'}}>
					<Image 
						style={styles.icon}
						source={require('../icons/photo.png')}
					/>
					<View style={styles.view}>
						<Text
							style={styles.text}
							onPress={Actions.camera}>Camera</Text>
					</View>
				</View>

				<View style={{height:10}} />

				<View style={{flexDirection:'row'}}>
					<Image
						style={styles.icon}
						source={require('../icons/sidebar.png')}
					/>
					<View style={styles.view}>
						<Text
							style={styles.text} 
							onPress={Actions.sidebar}>Side Bar</Text>
					</View>
				</View>

				<View style={{height:10}} />

				<View style={{flexDirection:'row'}}>
					<Image
						style={styles.icon}
						source={require('../icons/calendar.png')}
					/>
					<View style={styles.view}>
						<Text
							style={styles.text}
							onPress={Actions.date}>Date Picker</Text>
					</View>
				</View>

				<View style={{height:10}} />

				<View style={{flexDirection:'row'}}>
					<Image
						style={styles.icon}
						source={require('../icons/map.png')}
					/>
					<View style={styles.view}>
						<Text
							style={styles.text}
							onPress={Actions.map}>Current Location on Map</Text>
					</View>
				</View>
			</View>
			);//return
	}//render
}//MainScreen