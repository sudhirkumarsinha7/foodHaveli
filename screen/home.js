import React, {Component} from 'react';
import {Button,Platform,Alert,FlatList, StyleSheet,ActivityIndicator, Text, View} from 'react-native';


export default class home extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
      constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
      componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
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
             <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title} {item.releaseYear} {"Subscribe"}</Text>}
            keyExtractor={({id}, index) => id}
          />
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
  