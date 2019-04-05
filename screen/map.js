
import React, { Component } from 'react';
import { Platform, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
export default class map extends Component {



  render() {
    return (
      <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    );
  }
}