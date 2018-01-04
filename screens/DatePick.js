import React from 'react';


import {View,
		Text,
		Button,
		DatePickerAndroid
	} from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class DatePick extends React.Component{
	constructor(){
		super();
		this.state={date:'2017-01-04'}
	}


	render(){

		const styles={
		preview:{
			justifyContent:'center',
			alignItems:'center'
		}
		,text:{
			fontSize:25
		}
	}

		return(
			<View style={styles.preview}>
			<Text>Pick a Date from Date Picker</Text>
			<Text style={styles.text}>{this.state.date}</Text>
			<DatePicker
			date={this.state.date}
			mode='date'
			placeholder='select date'
			onDateChange={(date)=>{this.setState({date:date})}}
			/>
			</View>
			);
	}
}