import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import ScanQRCode from './screens/ScanQRCode';
import GenerateQRCode from'./screens/GenerateQRCode';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			 scan:false
		}
	}
  onChange = () => {	
	this.setState({scan:!this.state.scan});	
  }
 
  getScreen = () => {
	 if(this.state.scan){
		return <ScanQRCode/>;
	 }
	  return <GenerateQRCode/>;
	}

 getButtonLabel = () => {
	if(this.state.scan){
		return 'Generate QR Code';
	}
	return 'Scan QR Code';
	
}


  render(){
    return (
		<View style={styles.container}>
			<TouchableOpacity 
				style={styles.changeButton}
				activateOpacity={.5}
				onPress={this.onChange}
			>
			 <Text style={styles.changeButtonLabel}>{this.getButtonLabel()}</Text>
			</TouchableOpacity>
			{this.getScreen()}
		</View>
    );
  }
 
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  footerContainer:{
    flex:1,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
  },
  scannerContainer:{
    flex:1,
    
  },
  text:{
    fontSize:30,
    fontWeight:'bold'
  },
  changeButton:{
	justifyContent:'center',
	alignItems:'center',
	paddingVertical:10,
	marginHorizontal:20,
	marginVertical:10,
	borderColor:'black',
	borderRadius:5,
	backgroundColor:'white',
    borderWidth: StyleSheet.hairlineWidth,
	}
})


export default App;
