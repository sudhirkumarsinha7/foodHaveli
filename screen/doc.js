import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  Alert,
  ActivityIndicator,
  NativeAppEventEmitter,
  DeviceEventEmitter,
  NativeModules,
  NativeEventEmitter,
  TouchableHighlight
} from 'react-native';
import OpenFile from 'react-native-doc-viewer';
//import RNFS from 'react-native-fs'
var RNFS = require('react-native-fs');
var SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;
export default class doc extends Component {
 constructor(props) {
    super(props);
    this.state = { 
      animating: false,
      progress: "",
      donebuttonclicked: false,
    }
    this.eventEmitter = new NativeEventEmitter(NativeModules.RNReactNativeDocViewer);
    this.eventEmitter.addListener('DoneButtonEvent', (data) => {
      /*
      *Done Button Clicked
      * return true
      */
      console.log(data.close);
      this.setState({donebuttonclicked: data.close});
    })
    this.didPressToObjcButton = this.didPressToObjcButton.bind(this);
  }
  didPressToObjcButton() {
    this.setState({data: this.state.data + 1})
 }
  componentDidMount(){
    // download progress
    this.eventEmitter.addListener(
      'RNDownloaderProgress',
      (Event) => {
        console.log("Progress - Download "+Event.progress  + " %")
        this.setState({progress: Event.progress + " %"});
      } 
      
    );
  }
 
  componentWillUnmount (){
    this.eventEmitter.removeListener();
  }
  /*
  * Handle WWW File Method
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url the File Extension is missing.
  */
  handlePress = () => {
   if(Platform.OS === 'ios'){
      //IOS
      OpenFile.openDoc([{
        url:"https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls",
        fileNameOptional:"sample-test"
      }], (error, url) => {
         if (error) {
           console.error(error);
         } else {
           console.log(url)
         }
       })
    }else{
      //Android
      OpenFile.openDoc([{
        url:"http://mail.hartl-haus.at/uploads/tx_hhhouses/htf13_classic153s(3_giebel_haus).jpg", // Local "file://" + filepath
        fileName:"sample",
        cache:false,
        fileType:"jpg"
      }], (error, url) => {
         if (error) {
           console.error(error);
         } else {
           console.log(url)
         }
       })
    }
  }
 
  /*
  * Binary in URL
  * Binary String in Url
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
  */
  handlePressBinaryinUrl = () => {
    if(Platform.OS === 'ios'){
      //IOS
      OpenFile.openDocBinaryinUrl([{
        url:"https://storage.googleapis.com/need-sure/example",
        fileName:"sample",
        fileType:"xml"
      }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
    }else{
      //Android
      Alert.alert("Coming soon for Android")
    }
  }
  
  /*
  * Handle local File Method
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
  */
  handlePressLocalFile = () => {
    if(Platform.OS === 'ios'){
        OpenFile.openDoc([{
        url:SavePath+"filename.pdf",
        fileNameOptional:"sample"
      }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
    }else{
      //Android
      OpenFile.openDoc([{
        url:SavePath+"filename.pdf",
        fileName:"sample",
        cache:true /*Use Cache Folder Android*/
      }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
    }
  }
 
  /*
  * Base64String
  * put only the base64 String without data:application/octet-stream;base64
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
  */
  handlePressb64 = () => {
    if(Platform.OS === 'ios'){
      OpenFile.openDocb64([{
        base64:"{BASE64String}",
        fileName:"sample",
        fileType:"png"
      }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
    }else{
      //Android
      OpenFile.openDocb64([{
        base64:"{BASE64String}",
        fileName:"sample",
        fileType:"png",
        cache:true /*Use Cache Folder Android*/
      }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
    }
} 
    /*
  * Video File
  */
  handlePressVideo = () => {
    if(Platform.OS === 'ios'){
      OpenFile.playMovie(video, (error, url) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(url)
                }
            })
    }else{
      Alert.alert("Android coming soon");
    }
  }
  render() {
    
    return (
       <View>
            <Button
          onPress={this.handlePress.bind(this)}
          title="Press Me Open Doc Url"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={this.handlePressBinaryinUrl.bind(this)}
          title="Press Me Open BinaryinUrl"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={this.handlePressb64.bind(this)}
          title="Press Me Open Base64 String"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={()=>this.handlePressVideo("http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4")}
          title="Press Me Open Video"
          accessibilityLabel="See a Document"
        />
       </View>
    );
}
  
 
}