import React, {Component} from 'react';
import {Button,
  TouchableOpacity,
  TouchableHighlight,
  TextInput, 
  StyleSheet,
  DatePickerAndroid, 
  Text,
  TouchableWithoutFeedback, 
  View} from 'react-native';
  


  export default class schedule extends Component {
  static title = 'DatePickerAndroid';
  static description = 'Standard Android date picker dialog';

  state = {    
    minText: 'pick a date, no earlier than today',
    text:'date'   
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View>
        <Text>Start date</Text>
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'min', {
              date: this.state.minDate,
              minDate: new Date(),
            })}>
            <Text style={styles.text}>{this.state.minText}</Text>
           
          </TouchableWithoutFeedback>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
     </View>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});