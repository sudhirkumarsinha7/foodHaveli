
import React, {Component} from 'react';
import {Button,
  Platform,
  TouchableOpacity,
   StyleSheet, 
   Text,
   Header,
   Left,
   Right, 
   View} from 'react-native';
import ItemList from './itemList.js'
import Entypo from 'react-native-vector-icons/Entypo';

export default class home extends Component {
   
  static navigationOptions = {
    title: 'Menu',
  };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={{flex:9, borderWidth:1}}>
          
          <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()} >
          <Entypo name="menu"  size={50} color={'#9400D3'} />
          </TouchableOpacity>
         
            <ItemList/>
            {/* <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.google.com')}>
            Google
          </Text> */}
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
 