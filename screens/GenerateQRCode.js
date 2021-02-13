import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class GenerateQRCode extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			link:'http://www.hophoet.com'
		}
	}

  render(){
    return (
      <View style={styles.container}>
		<View style={styles.textInputContainer}>
		<TextInput
			style={styles.textInput}
			onChangeText={(text) => this.setState({link:text})}
			value={this.state.link}
		/>
		</View>
		<View style={styles.qrCodeContainer}>
		<Text style={styles.link}>{this.state.link}</Text>
		<View style={{backgroundColor:'white', padding:10}}>
		<QRCode
			size={300}
			value={(this.state.link)? this.state.link:' '}
		/>
		</View>
		</View>
	
	</View>
	)
  }


}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		backgroundColor:'black',
	},
	textInput:{
        backgroundColor:'#ffff',
        marginHorizontal:10,
        padding:8,
        marginBottom:10,
        paddingHorizontal:20,
		borderColor:'gray',
		borderWidth:StyleSheet.hairlineWidth,
		borderRadius:5,
		fontSize:17,
	},
	link:{
	 fontSize:20,
	 fontFamily:'monospace',
	 color:'white',
	 textAlign:'center',
	},
	textInputContainer:{
		flex:1,
		justifyContent:'center',
	},
	qrCodeContainer:{
		alignItems:'center',
		justifyContent:'center',
		flex:3,
		
	}
})
