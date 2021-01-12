/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class App extends React.Component {

  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.scannerContainer} >
          <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
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
          <Text style={styles.text}>Denise</Text>
      </View>

    </View>
    );
  }
 
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'gray',
    flex:1
  },
  footerContainer:{
    flex:1,
    // backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
  },
  scannerContainer:{
    flex:2,
    
  },
  text:{
    fontSize:30,
    fontWeight:'bold'
  }
})

