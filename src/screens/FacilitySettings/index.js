import React, { Component } from "react";
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FacilitySettings extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerStyle: {
        backgroundColor: '#234a0a'
      },
      headerTintColor: '#E6E6E6',
    };
  }

  render() {
    return (
      <View>
          < Button
          onPress={() => {
            Alert.alert(
              'Kim o?',
              '',
              [
                { text: 'ÖCÜ', onPress: () => Alert.alert('ANANIN AMI ANKARAGÜCÜ') },
              ],
            );

          }}
          title="GUIDE"
          color='rgba(255, 171, 0, 0.7)'
        />
      </View>
    );
  }
}

export default FacilitySettings;
