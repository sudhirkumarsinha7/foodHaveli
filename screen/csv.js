import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import RNFS from 'react-native-fs';
import Toast from 'react-native-simple-toast';
import OpenFile from 'react-native-doc-viewer';
export default class csv extends Component {
   constructor() {
      super();

      this.state = {
         name: 'React',
         converting: [],
         csvData: [{
            "data": [{
               "Id": 1612,
               "Name": "harsha",
               "Type": "group",
               "StoreNumber": null,
               "StoreUid": null,
               "Brand": null,
               "DeviceId": null,
               "DeviceUID": null,
               "parentGroup": true,
               "Children": []
            },
            {
               "Id": 1613,
               "Name": "harsha",
               "Type": "group",
               "StoreNumber": null,
               "StoreUid": null,
               "Brand": null,
               "DeviceId": null,
               "DeviceUID": null,
               "parentGroup": true,
               "Children": []
            },
            {
               "Id": 1614,
               "Name": "harsha",
               "Type": "group",
               "StoreNumber": null,
               "StoreUid": null,
               "Brand": null,
               "DeviceId": null,
               "DeviceUID": null,
               "parentGroup": true,
               "Children": []
            }, {
               "Id": 1615,
               "Name": "harsha",
               "Type": "group",
               "StoreNumber": null,
               "StoreUid": null,
               "Brand": null,
               "DeviceId": null,
               "DeviceUID": null,
               "parentGroup": true,
               "Children": []
            }]
         }
         ],
         updatedJSONObject: null

      };
   }
   testing = () => {
      var csvData = this.state.csvData
      alert("csvData" + JSON.stringify(csvData))
   }
   testing1 = () => {
      var path = RNFS.ExternalDirectoryPath + '/test.xls';
      var csvData = this.state.csvData;
      url = "file://" + path;
      var columnDataArray = [];
      // alert("path"+csvData[0].data.length)
      //alert("csvData"+JSON.stringify(csvData))


      for (var i = 0; i < csvData[0].data.length; i++) { // wrapping all the required data into single array.
         var eachObject = {};
         eachObject.Id = csvData[0].data[i] ? csvData[0].data[i].Id : 'NA';
         eachObject.Name = csvData[0].data[i] ? csvData[0].data[i].Name : 'NA';
         columnDataArray.push(eachObject);
      }
      var columnData = columnDataArray.map(d => { return '\n' + d.Id + ',' + d.Name }).join();
      // alert("columnData: "+columnData)
      var rownames = '\nid,' +  "Name";
      var abc = rownames + columnData;

      RNFS.writeFile(path, abc,'utf8').then((success) => {
         // alert("path"+url)

         Toast.show('Downloading...');
         this.setState({ isLoading: false });
         OpenFile.openDoc([{
            url: "file://" + path, // Local "file://" + filepath
            fileName: "data",
            cache: false,
            fileType: "csv"
         }], (error, url) => {
            alert("path"+JSON.stringify(error))
            if (error) {
               console.log(error);
            } else {
               console.log(url);
            }
         })
      }).catch((err) => {
         Toast.show('Downloading failed, Please try again.');
         this.setState({ isLoading: false });
      })
      // alert("csvData"+JSON.stringify(csvData))
      // alert("path"+path)

   }
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.welcome}>csv</Text>
            <TouchableOpacity
               onPress={
                  () => this.testing1()
               } >
               <Text> csv </Text>
            </TouchableOpacity>
         </View>

      );
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#228B22',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      color: 'white'
   },
   welcome: {
      backgroundColor: '#228B22',
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
})

