import * as React from 'react';
import { View,Image } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import JokeScreen from './Screens/JokeScreen'
import HoroScope from './Screens/HoroScope'
import WeatherScreen from './Screens/WeatherScreen'
import NewsScreen from './Screens/NewsScreen'

import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen : JokeScreen,
HoroScope : HoroScope,
NewsScreen : NewsScreen,
WeatherScreen : WeatherScreen
})

const AppContainer = createAppContainer(AppNavigator)


