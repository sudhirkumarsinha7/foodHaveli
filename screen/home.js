
import React, {Component} from 'react';
import {Button,
  TabNavigator,
  TouchableOpacity,
   StyleSheet, 
   Text,
   Header,
   Left,
    View} from 'react-native';
import ItemList from './itemList.js'

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import style from '../styleSheets/styles.js'

export default class home extends Component {
   
  static navigationOptions = {
    title: 'Menu',
  };
 

      render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={{flex:1, borderWidth:1}}>
          <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()} >
          <Entypo name="menu" size={50} color={'#9400D3'} />
          </TouchableOpacity>
          </View>
          <View style={{flex:2,flexDirection:'row',}}>
          <Text style={styles.container}>Food Haveli</Text>
          </View>
         
          </View>
          
          <View style={{flex:9, borderWidth:1}}>  
                  <ItemList/>
          </View>
          <View style={{flex:1, borderWidth:1}}>  
         <View style={{flex:0,flexDirection:'row' ,borderWidth:1,backgroundColor: '#9400D3' }}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate("home")}>
              <Icon name="home"  size={28} color={'#FFFFFF'} />
              <Text style={style.iconText}>Home            </Text>
              </TouchableOpacity>  
              
              <TouchableOpacity onPress={() => this.props.navigation.navigate("schedule")}>
              <Icon name="calendar" size={28} color={'#FFFFFF'}  />
              <Text style={style.iconText} >Schedule      </Text>
              </TouchableOpacity> 
              <TouchableOpacity>
              <AntDesign name="wallet" size={28} color={'#FFFFFF'} />
              <Text style={style.iconText} >Wallet         </Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("mySubscribe")}>
              <Icon name="list-alt" size={28} color={'#FFFFFF'} />
              <Text style={style.iconText}>Plans         </Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("schedule")}>
              <Icon name="support" size={28} color={'#FFFFFF'} />
              <Text style={style.iconText}>Support</Text>
              </TouchableOpacity> 
              </View>
            
         </View>
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
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
      color: '#333333',
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


