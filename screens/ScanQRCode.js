import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class ScanQRCode extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			qrcode:null
		}
	}
  onSuccess = e => {	
  	 let qrcodeData = e.data;
	 this.show(qrcodeData);
  }

  show = async (qrcodeData) =>{
	 const supportedLink = await Linking.canOpenURL(qrcodeData);
	 if(supportedLink){
		await Linking.openURL(supportedLink);	
	}
	else{
		Alert.alert(`Can't be open as a URL\n QRCODE data:${supportedLink}`);
	}
  }

  render(){
    return (
      <View style={styles.container}>
		  <View style={styles.scannerContainer} >
			  <QRCodeScanner
			  onRead={this.onSuccess}
			  flashMode={RNCamera.Constants.FlashMode.off}
			  topContent={
				<View style={styles.headerContainer}>
					<Text style={styles.centerText}>
					   Scan QR code.
					</Text>
				</View>
			  }
			  bottomContent={
				<TouchableOpacity style={styles.buttonTouchable}>
				  <Text style={styles.buttonText}>OK. Got it!</Text>
				</TouchableOpacity>
			  }
			/>
		  </View>
      </View>
    );
  }
 
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
	marginTop:30,
  },
  scannerContainer:{
    flex:1,
  },
  text:{
    fontSize:30,
    fontWeight:'bold'
  },
  headerContainer:{
		backgroundColor:'white',	
	}
})


export default ScanQRCode;


