import React, { Component } from 'react';
import {
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  DatePickerAndroid,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import styles from '../styleSheets/styles.js'



export default class schedule extends Component {
  static title = 'DatePickerAndroid';
  static description = 'Standard Android date picker dialog';

  state = {
    minText: 'start date',
    text: 'date'
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({ code, message }) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View style={{ flex: 9, borderWidth: 1 }}>
        <View style={{ flex: 1, borderWidth: 1 }}>
          <Text style={styles.screenTitle}>My schedule</Text>
          <View style={{ flex: 0, flexDirection: 'row', borderWidth: 1 }}>
            <View style={{ flex: 1, borderWidth: 1 }}>
              <Text>Start date</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 1 }}>
              <TouchableOpacity
                onPress={this.showPicker.bind(this, 'min', {
                  date: this.state.minDate,
                  minDate: new Date(),
                })}>
                <Text style={styles.text}>{this.state.minText}</Text>

              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:7}}>
          <Text>Start date</Text>
        </View>
        <View style={{flex:6, borderWidth:1}}>
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'min', {
              date: this.state.minDate,
              minDate: new Date(),
            })}>
            <Text style={styles.text}>{this.state.minText}</Text>
           
          </TouchableOpacity>
        </View>
    
          </View> */}
      </View>
    );
  }
}

