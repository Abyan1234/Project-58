import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import Button from '../components/Button'


export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
         <TouchableOpacity
        style={styles.button}>
        <Text
          style={styles.buttonText}>
       Weather Screen
        </Text>
      </TouchableOpacity>
   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
   borderColor:'black'
   
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
 color:'black'
  }
});