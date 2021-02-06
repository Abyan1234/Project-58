import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


class Button extends React.Component {
 

  render() {
    return (
      <TouchableOpacity
        style={styles.button}>
        <Text
          style={styles.buttonText}>
        Joke Screen
        </Text>
      </TouchableOpacity>
    );
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

export default Button;