/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button,Platform, StyleSheet,Image, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginPage from './screen/login.js';
import HomePage from './screen/home.js';

export default class App extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!');
    }
      render() {
        return (
          <View style={{flex:1, borderWidth:1}}>
            
            <View style={{flex:9, borderWidth:1}}>
            <Text style={styles.welcome}>Welcome to Food Haveli</Text>
            <View style={{flex:8, borderWidth:1}}>
            <View style={{flex:1,flexDirection:'row',borderWidth:1 }}>

            <View style={{flex:9}}>
            <Text>LogIn</Text>
            <Image
             style={{width: 50, height: 50}}
              source={require('./images/login.png')}
            />
            </View>
            <View style={{flex:8}}>
            <Text>Register</Text>
            <Image
             style={{width: 50, height: 50}}
              source={require('./images/register.png')}
            />
            </View>
            </View>
            </View>
            </View>
            
            <View style={{flex:1,flexDirection:'row' , }}>

            <View style={{flex:9}}>
            <Text>Home</Text>
            <Image
             style={{width: 30, height: 40}}
              source={require('./images/home.png')}
            />
            </View>
            <View style={{flex:8}}>
            <Text>My account</Text>
            <Image
             style={{width: 30, height: 40}}
              source={require('./images/user.png')}
            />
            </View>
            <View style={{flex:3}}>
            <Text>MyCart</Text>
            <Image
             style={{width: 30, height: 40}}
              source={require('./images/cart.png')}
            />
            </View>
            </View>
          </View>
        );
      }
}

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

});



export const FoodHaveli = StackNavigator({
  login: { screen: LoginPage },
  homepage: { screen : HomePage },
}, {
  cardStyle: { shadowColor: 'transparent' },
});