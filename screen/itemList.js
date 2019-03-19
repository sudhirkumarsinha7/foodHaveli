
import React, {Component} from 'react';
import {Button,
  TouchableOpacity,
  TouchableHighlight,
  FlatList, 
  StyleSheet,
  ActivityIndicator, 
  Text,
  Alert,
  TabNavigator, 
  View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


// Internal imports
import style from '../styleSheets/styles.js';
import login from './login.js';

var demo={
  "title": "test"
};
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
      _onPress(item) {
        Alert.alert('You tapped the button  '+item.title)
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
               
              {/* <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title} {item.releaseYear} {"Subscribe"}</Text>}
                keyExtractor={({id}, index) => id}
              /> */}
               <FlatList
                data={this.state.dataSource}
                renderItem={({item, separators}) => (
                  <TouchableHighlight
                    onPress={() => this._onPress(item)}
                    onShowUnderlay={separators.title}
                    onHideUnderlay={separators.releaseYear}>
                    <View style={{backgroundColor: 'white'}}>
                      <Text>{item.title}    {item.releaseYear} </Text>
                    </View>
                  </TouchableHighlight>
                )}
              />
              

            
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
 