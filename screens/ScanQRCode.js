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

class ScanQRCode extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			qrcode:null
		}
	}
  onSuccess = e => {	
	//		
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.scannerContainer} >
          <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.footerContainer}>
          <Text style={styles.text}>Scan QR Code</Text>
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
  footerContainer:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  scannerContainer:{
    flex:1,
    
  },
  text:{
    fontSize:30,
    fontWeight:'bold'
  }
})


export default ScanQRCode;


