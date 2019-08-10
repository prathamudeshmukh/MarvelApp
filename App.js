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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const data = [
    {
      "name": "Iron Cross Army",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
      "description": ""
    },
    {
      "name": "Iron Fist (Bei Bang-Wen)",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/53176ebd40ad7.jpg",
      "description": ""
    },
    {
      "name": "Iron Fist (Danny Rand)",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/52616788ebc63.jpg",
      "description": ""
    },
    {
      "name": "Iron Fist (Orson Randall)",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/53176e979cca2.jpg",
      "description": ""
    },
    {
      "name": "Iron Fist (Quan Yaozu)",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/4/20/53176e89b563e.jpg",
      "description": ""
    },
    {
      "name": "Iron Fist (USM)",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52321751dffa6.jpg",
      "description": "Danny is always focused yet relaxed - more Zen-focused than chill surfer dude."
    },
    {
      "name": "Iron Fist (Wu Ao-Shi)",
      "thumbnailUrl": "http://i.annihil.us/u/prod/marvel/i/mg/7/03/53176f05a6851.jpg",
      "description": ""
    }
  ];

  return (

          <View style={styles.mainContainer}>
            <View style={styles.searchControlContainer}>
              <TextInput style={styles.searchInput}/>
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.buttonLabel}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
            <Text style={{fontSize: 45}}>bit.ly/ReactNativeWorkshopInfo</Text>
            <FlatList 
              data={data}
              renderItem={({item}) => <Text>{item.name}</Text>}

            />
              </View>
          </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1
  },
  searchControlContainer:{
    flex: 0.5,
    padding: 15,
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  listContainer :{
    flex: 6,
    flexDirection: 'column'
  },
  searchInput: {
    height: 40,
    backgroundColor: 'gray',
    width: 300,
  },
  searchButton: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 2
  },
  buttonLabel: {
    color: 'white'
  }
});

export default App;
