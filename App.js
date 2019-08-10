/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import SearchScreen from './app/screens/SearchScreen';

const App = () => {
  return (
      <SearchScreen/>
  );
};

export default App;
