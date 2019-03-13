
import React, {Component} from 'react';
import {Button,
  TouchableOpacity,
  FlatList, 
  StyleSheet,
  ActivityIndicator, 
  Text,
  Alert, 
  View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


// Internal imports
import style from '../styleSheets/styles.js';
import login from './login.js';


export default class itemList extends Component {
   
      constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
      componentDidMount(){
         fetch("https://facebook.github.io/react-native/movies.json")
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
      
      // _itemListApiCall(){
      //   new logs().write("ItemList API calll");
      //   this.setState({ isLoading: true });
      //   fetch(url)
      // }
      render() {
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
        return (
          <View style={{flex:1, borderWidth:1}}>
               
              <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title} {item.releaseYear} {"Subscribe"}</Text>}
                keyExtractor={({id}, index) => id}
              />
              <View style={{flex:0,flexDirection:'row' ,borderWidth:1,backgroundColor: '#9400D3' }}>
              <TouchableOpacity >
              <Icon name="home"  size={28} color={'#FFFFFF'} />
              <Text style={style.iconText}>Home            </Text>
              </TouchableOpacity>  
              
              <TouchableOpacity >
              <Icon name="calendar" size={28} color={'#FFFFFF'}  />
              <Text style={style.iconText} >Schedule      </Text>
              </TouchableOpacity> 
              <TouchableOpacity >
              <AntDesign name="wallet" size={28} color={'#FFFFFF'} />
              <Text style={style.iconText} >Wallet         </Text>
              </TouchableOpacity> 
              <TouchableOpacity >
              <Icon name="list-alt" size={28} color={'#FFFFFF'} />
              <Text style={style.iconText}>Plans         </Text>
              </TouchableOpacity> 
              <TouchableOpacity >
              <Icon name="support" size={28} color={'#FFFFFF'} />
              <Text style={style.iconText}>Support</Text>
              </TouchableOpacity> 
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
 