
import React, { Component } from 'react';
import {
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  DatePickerAndroid,
  Text,
  Alert,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import styles from '../styleSheets/styles.js'
import data from './data.json'
import { RadioButton } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';

export default class schedule extends Component {
  static title = 'DatePickerAndroid';
  static description = 'Standard Android date picker dialog';

  state = {
    minText: 'start date',
    text: 'date',
    checked: 'Daily',
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
  schedule=()=>{
 
    var date = new Date().getDate()+15;
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var nextFiftteen =year + '-' + month + '-' +date;
    Alert.alert(JSON.stringify(data.environment));
    return nextFiftteen;
   } 
  render() {
    const { checked } = this.state;
    return (
      <View style={{ flex: 9, borderWidth: 1 }}>
        <View style={{ flex: 1, borderWidth: 1 }}>
          <Text style={styles.screenTitle}>My schedule</Text>
          <View style={{ flex: 0, flexDirection: 'row', borderWidth: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.screenTitle}>Start date</Text>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={this.showPicker.bind(this, 'min', {
                  date: this.state.minDate,
                  minDate: new Date(),
                })}>
                <Text style={styles.text}>{this.state.minText}</Text>

              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 0, flexDirection: 'row', borderWidth: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <RadioButton
                value={"Daily"}
                status={checked === 'Daily' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'Daily' }); }}
              />
              <Text style={styles.text}>Daily</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <RadioButton
                value={"Alternet Day"}
                status={checked === 'Alternet Day' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'Alternet Day' }); }}
              />
              <Text style={styles.text}>Alternet Day</Text>
            </View>
          </View>
          <View style={{ flex: 0, flexDirection: 'row', borderWidth: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <RadioButton
                value={"Week day"}
                status={checked === 'Week day' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'Week day' }); }}
              />
              <Text style={styles.text}>Week day</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <RadioButton
                value={"Weekend"}
                status={checked === 'Weekend' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'Weekend' }); }}
              />
              <Text style={styles.text}>Weekend</Text>
            </View>
          </View>
          <View style={{ flex: 1, borderWidth: 1 }}>
            <Text  style={styles.screenTitle} >Schedule Preview</Text>
            <View style={{ paddingTop: 10, flex: 1 }}>
            <TouchableOpacity
                      style = {styles.submitButton}
                      onPress={() => this.schedule()}
                      >
                      <Text style = {styles.submitButtonText}> date </Text>
                    </TouchableOpacity>
        <Calendar
          current={new Date()}
          // maxDate={"2019-04-10"}
                      //maxDate={ this.schedule()}
        />
      </View>
        </View>
        
        </View>
      </View>
    );
  }
}
