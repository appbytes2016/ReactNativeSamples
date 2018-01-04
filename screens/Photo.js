import React from 'react';

import {
	View,
	Text,
	Dimensions,
	Button,
	Image

} from 'react-native';

import Camera from 'react-native-camera';

export default class Photo extends React.Component{

	constructor(){
		super();
		this.state={clicked:false,
					cameraType:'front',
					mirrorMode:true,
					url:'string'};
					
		this.takePicture=this.takePicture.bind(this);
		this.toggle=this.toggle.bind(this);
	}

		takePicture(){
			this.setState({clicked:true});
			this.camera.capture()
			.then((data)=>this.setState({url:data.path}))
			.catch(err=>console.log(err));
	}

		toggle(){
			if(this.state.cameraType === 'back'){
				this.setState({
					cameraType :'front',
					mirrorMode : false
				})
			}else{
				this.setState({
					cameraType :'back',
					mirrorMode : false
				})
			}
		}
	
	render(){
		const styles={
		preview:{
			height:Dimensions.get('window').height/2,
			width:Dimensions.get('window').width
		}
	}


		return(
			<View>
				<Camera
					ref={(cam) => {this.camera = cam;}}
					type={this.state.cameraType}
					mirrorImage={this.state.mirrorMode}
           			style={styles.preview} />
           		<View style={{height:10}} />
           		<Button title='toggle camera' onPress={this.toggle} />
           		<View style={{height:10}} />
				<Button title='capture' onPress={this.takePicture} />
				<View style={{height:10}} />
				<Image style={styles.preview}
					source={{uri: this.state.url}} />
			</View>
		);
	}
}