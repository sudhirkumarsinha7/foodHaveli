
import React, {Component} from 'react';
import {Button,
  TouchableOpacity,
  FlatList, 
  StyleSheet,
  ActivityIndicator, 
  Text, 
  View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createStackNavigator, TabNavigator,createDrawerNavigator} from 'react-navigation';

// Internal imports
import style from '../styleSheets/styles.js'
export default class Menu extends Component {
   
      constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
     
      render() {
         
        return (
              <View style={{flex:9,flexDirection:'row' ,borderWidth:1 }}>
              <TouchableOpacity >
              <Icon name="home"  size={28} color={'#ff00b1'} />
              <Text style={style.iconText}>Home            </Text>
              </TouchableOpacity>  
              
              <TouchableOpacity >
              <Icon name="calendar" size={28} color={'#ff00b1'}  />
              <Text style={style.iconText} >Shedule         </Text>
              </TouchableOpacity> 
              <TouchableOpacity >
              <AntDesign name="wallet" size={28} color={'#ff00b1'} />
              <Text style={style.iconText} >Wallet         </Text>
              </TouchableOpacity> 
              <TouchableOpacity >
              <Icon name="list-alt" size={28} color={'#ff00b1'} />
              <Text style={style.iconText}>Plans            </Text>
              </TouchableOpacity> 
              <TouchableOpacity >
              <Icon name="support" size={28} color={'#ff00b1'} />
              <Text style={style.iconText}>Support</Text>
              </TouchableOpacity> 
              </View>
            
        );
      }
}
