import { StyleSheet } from 'react-native';  
export default StyleSheet.create({
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