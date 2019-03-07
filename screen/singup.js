import React, {Component} from 'react';
import { Platform, View, ScrollView,Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


export default class signup extends Component {
        state = {
        fistName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        address: '',
        mobile:''
      }
      handleFistName = (text) => {
        this.setState({ fistName: text })
      }
      handleLastName = (text) => {
        this.setState({ lastName: text })
      }
      handleUsername = (text) => {
        this.setState({ username: text })
      }
      handlePassword = (text) => {
        this.setState({ password: text })
      }
      handleConfirmPassword = (text) => {
        this.setState({ confirmPassword: text })
      }
      handleEmail = (text) => {
        this.setState({ email: text })
      }
      handleAddress = (text) => {
        this.setState({ address: text })
      }
      
      handleMobile = (text) => {
        this.setState({ mobile: text })
      }
      login = (username, pass) => {
        Keyboard.dismiss();
        alert('Username: ' + username + ' password: ' + pass)
      }
  render() {
    return (
      <ScrollView>
      <View style = {styles.container}>
        <Text style={styles.welcome}>Register Portal</Text> 
        
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "FistName"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleFistName}/>
          
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "LastName"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleLastName}/>
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
            <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "ConfirmPassword"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleConfirmPassword}/>
          
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Email"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleEmail}/>
            <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Address"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleAddress}/>
          
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Mobile"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleMobile}/>

          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
                () => this.login(this.state.username, this.state.password)
            }>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
      </View>
      </ScrollView>

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