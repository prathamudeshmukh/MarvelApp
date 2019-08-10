import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
  } from 'react-native';  
import styles from './styles/SearchScreenStyles';
export default class SearchScreen extends React.Component{
    constructor() {
        super();
        this.data = [
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
    }
    
    render() {
       return  <View style={styles.mainContainer}>
            <View style={styles.searchControlContainer}>
              <TextInput style={styles.searchInput}/>
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.buttonLabel}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                data={this.data}
                renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </View>
          </View>
    }
}

  