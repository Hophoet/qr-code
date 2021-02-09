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
			link:'http://hophoet.com'
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
		<QRCode
			size={300}
			value={(this.state.link)? this.state.link:' '}
		/>
		</View>
	
	</View>
	)
  }


}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
	},
	textInput:{
		backgroundColor:'white',
		elevation:10,
		marginHorizontal:20,
	},
	link:{
	 fontSize:30,
	 fontFamily:'monospace',
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
