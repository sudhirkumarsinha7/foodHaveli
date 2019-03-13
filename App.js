/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button,Platform,Alert,SafeAreaView, StyleSheet,Image, Text, View} from 'react-native';
import {createStackNavigator, TabNavigator,createDrawerNavigator} from 'react-navigation';

import login from './screen/login.js';
import singup from './screen/singup.js';
import home from './screen/home.js';
import mySubscribe from './screen/mySubscribe.js';
import menu from './screen/Menu.js';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isInitialised:true
    }
    // Global variables

    // Booleans
    global.boolTrue = true,
    global.boolFalse = false,
    global.boolStringTrue = 'true',
    global.boolStringFalse = 'false',
    // Platforms and AppState
    global.platformIOS = 'ios',
    global.platformAndroid = 'android',
    global.appStateActive = 'active',
    global.appStateBackground = 'background',
    //Tabs
    global.settingsTabs = 'Settings',
    
    //Messages
    global.noDataAvailable = 'No data available',
    global.msgAddressIsEmpty = 'Address is empty',
    global.msgEnterEmailID = 'Enter Email ID',
    global.msgPleaseProvideValidEmailID = 'Please provide valid email ID',
    global.msgSessionExpired = 'Session has expired, Please login again',
  
    // Tokens and keys
    global.googlePlayKey = 'AIzaSyBW9Jo75zci_d17Y06Bxlhw3ivx_HbKZ14',
    // Screens
    global.screensTankScreen = 'tankScreen',
    global.screensforgotPassword = 'forgotPassword',
    global.screensassetDetails = 'assetDetails',
    global.screenhomepage = 'homepage',
    global.screenlogin = 'login',
    
    // Async Storage Variables
    
    // Event Listener Variables
    
    // API end points
    global.EPforgotPassword = 'forgotPassword',
    global.EPgetAssets = 'getAssets',
    global.EPlogin = 'login',
    global.EPgetAssetTypes = 'getAssetTypes',
    global.EPgetModels = 'getModels',
    global.EPaddAsset = 'addAsset',
    global.EPresetPassword = 'resetPassword',
    global.EPupdateUser = 'updateUser',
    global.EPgetAlerts = 'getAlerts',
    // REST API methods
    global.RESTPost = 'POST',
    global.RESTGet = 'GET',
    global.RESTDelete = 'DELETE',
    global.RESTUpdate= 'UPDATE',
    // Files and folder
    global.fileTankMonitoringTechnician = '/TankMonitoring.txt',
    // Props , Styling and Other
    global.propscontain = 'contain',
    // Helpers
    global.propscontain = 'contain',
    global.msgNoMoreAlertsAvailable = 'No more alerts available',

    global.screenenvironment = 'environment',

    global.colorBlue = "#2394C7",
    global.colorRed = "#D63230",
    global.colorOrange = "#F39237",
    global.colorGreen = "#1B998B" // color: '#1B998B',
  } 
  
      render() {
        if(this.state.isInitialised){
          return (
            <SafeAreaView style={{flex:1,backgroundColor:'#f7f7f7',shadowOpacity:0,}}><Sample /></SafeAreaView>
            );
        } else {
          return null;
        }
        
      }
}


const SimpleApp = TabNavigator({
    home: { screen: home },
    login: { screen: login },
    singup: { screen: singup },
    mySubscribe: { screen: mySubscribe },
    menu:{screen:menu}
 }, {
  cardStyle: { shadowColor: 'transparent' },
});


export const Sample = createDrawerNavigator({
  login: { screen: login },
  singup: { screen: singup },
  mySubscribe: { screen: mySubscribe },
  menu:{screen:menu}
}, {
cardStyle: { shadowColor: 'transparent' },
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
});
