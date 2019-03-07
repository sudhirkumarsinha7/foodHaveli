/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


export default class login extends Component {
        state = {
        email: '',
        password: ''
      }
      handleUsername = (text) => {
        this.setState({ Username: text })
      }
      handlePassword = (text) => {
        this.setState({ password: text })
      }
      login = (Username, pass) => {
        alert('Username: ' + Username + ' password: ' + pass)
      }
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.welcome}>LogIn Portal</Text>  
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Username"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleUsername}/>
          
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Password"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handlePassword}/>
          
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
                () => this.login(this.state.email, this.state.password)
            }>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#228B22',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  },
  welcome: {
    backgroundColor: '#228B22',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})