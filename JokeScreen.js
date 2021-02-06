import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import Button from '../components/Button'


export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Button color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}
