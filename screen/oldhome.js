import React, {Component} from 'react';
import {Button,Platform,Alert,SafeAreaView, StyleSheet,Image, Text, View} from 'react-native';
export default class home extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
      render() {
        return (
          <View style={{flex:1, borderWidth:1}}>
            
            <View style={{flex:9, borderWidth:1}}>
            <Text style={styles.welcome}>Welcome to Food Haveli</Text>
            <View style={{flex:8, borderWidth:1}}>
            <View style={{flex:1,flexDirection:'row',borderWidth:1 }}>

            <View style={{flex:9}}>
                <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="login"
            onPress={() => this.props.navigation.navigate("login")}
          />
            
            </View>
            <View style={{flex:8}}>
            <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#FFD700" }}
            title="singup"
           onPress={() => this.props.navigation.navigate("singup")}
          />
            </View>
            
            </View>
            </View>
            </View>
            
            <View style={{flex:1,flexDirection:'row' , }}>

            <View style={{flex:9}}>
            <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#FFD700" }}
            title="home"
           onPress={() => this.props.navigation.navigate("home")}
          />
            {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
            {/* <Image
             style={{width: 30, height: 40}}
              source={require('../images/home.png')}
            /> */}
            </View>
            <View style={{flex:8}}>
            {/* <Text>My account</Text>
            <Image
             style={{width: 30, height: 40}}
              source={require('../images/user.png')}
            /> */}
            <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#FFD700" }}
            title="account"
            onPress={() => this.props.navigation.navigate("home")}

          />
            </View>
            <View style={{flex:3}}>
            {/* <Text>MyCart</Text>
            <Image
             style={{width: 30, height: 40}}
              source={require('../images/cart.png')}
            /> */}
            <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#FFD700" }}
            title="Cart"
            onPress={() => this.props.navigation.navigate("home")}

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
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
  });
  