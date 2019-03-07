/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button,Platform,Alert, StyleSheet,Image, Text, View} from 'react-native';
import {createStackNavigator, StackNavigator,createAppContainer} from 'react-navigation';

import login from './screen/login.js';
import singup from './screen/singup.js'
import home from './screen/home.js'
export default class App extends Component {  
      render() {

        return (
          <View style={{flex:1, borderWidth:1}}>
            
            <View style={{flex:9, borderWidth:1}}>
            <Text style={styles.welcome}>Welcome to Food Haveli</Text>
            <View style={{flex:8, borderWidth:1}}>
            <View style={{flex:1,flexDirection:'row',borderWidth:1 }}>

            <View style={{flex:9}}>
            <Text style = {styles.submitButtonText}> Login </Text>
                <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="login"
            onPress={() => this.props.navigation.navigate("login")}
          />
            
            </View>
            <View style={{flex:8}}>
            <Text>Register</Text>
            <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#FFD700" }}
            title="Register"
            onPress={() => this.props.navigation.navigate("Register")}
          />
            </View>
            
            </View>
            </View>
            </View>
            
            <View style={{flex:1,flexDirection:'row' , }}>

            <View style={{flex:9}}>
            <Text>Home</Text>
            {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
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

// export const navigate = StackNavigator({
  
//   login: {
//     screen: login,
//     navigationOptions: {
//       title: "login"
//     }
//   }
// });

const SimpleApp = createStackNavigator({
  home: { screen: home },
 });


// export const navigate = StackNavigator({
//   // screenName : { screen : ImportedClassname }
//   LoginPage: { screen: LoginPage }
// }, {
//   cardStyle: { shadowColor: 'transparent' },
// });


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
