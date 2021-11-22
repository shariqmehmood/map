import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
  Text,
  View,
  Touchable,
  _ScrollView,
} from 'react-native';
import Locati from './src/location';
import Mapp from './src/map';

import Signup from './src/signup';

export default function App() {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <Locati />
        {/* <Signup />  */}
        {/* <Mapp /> */}
      </ScrollView>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
