import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  Alert,
  ActivityIndicator
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class ScanQRCode extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			qrcodeData:null,
			isLoading:false
		}
	}
  onSuccess = e => {	
  	 let qrcodeData = e.data;
	 this.setState({qrcodeData:qrcodeData});
	 this.show(qrcodeData);
  }

  show = async (qrcodeData) =>{
	 this.setState({isLoading:true});
	 const supportedLink = await Linking.canOpenURL(qrcodeData);
	 if(supportedLink){
		await Linking.openURL(supportedLink);	
	 	this.setState({isLoading:false});
	}
	else{
		Alert.alert(`QRCODE data: ${this.state.qrcodeData}\nType: ${typeof this.state.qrcodeData}\nLength: ${String(this.state.qrcodeData).length}`);
	 	this.setState({isLoading:false});
	}
  }

  render(){
    return (
      <View style={styles.container}>
		  <StatusBar backgroundColor='black' />
		  <View style={styles.headerContainer}>
				<Text>{this.state.qrcodeData}</Text>
				{ this.state.isLoading && <ActivityIndicator size='large' color='gray' /> }
		  </View>
		  <View style={styles.scannerContainer} >
			  <QRCodeScanner
			  onRead={this.onSuccess}
			  flashMode={RNCamera.Constants.FlashMode.off}
			  topContent={
				<>
				</>
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
		justifyContent:'center',
		alignItems:'center',
	}
})


export default ScanQRCode;


