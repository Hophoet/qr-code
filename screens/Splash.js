import React from 'react';
import {Image, Dimensions, Text, StatusBar, View, StyleSheet} from 'react-native';

export default class Splash extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
	
	}

	componentWillUnmount(){

	}

	render(){	
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} backgroundColor='black'  />
				<Image 
					resizeMode='contain'
					style={styles.logo}
					source={require('../assets/images/logo.png')} />
				<Text style={{color:'white'}}>by hophoet</Text>
				<View style={styles.code}>
					<Text style={styles.codeLabel}>code</Text>
				</View>
			</View>
		)	
	}
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'black',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	logo:{
		height:width/4,
		width:width/4,
	},
	code:{
		backgroundColor:'white',
		position:'absolute',
		width:height,
		justifyContent:'center',
		alignItems:'center',
		transform:[ 
			{rotate:'90deg'}
		],
		right:-width/1.5,
		
	},
	codeLabel:{
		color:'black',
		fontWeight:'bold',
		fontSize:25,	
		textTransform:'uppercase',
	}
})
