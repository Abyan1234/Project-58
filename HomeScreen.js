import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config'


export default class HomeScreen extends React.Component {

  goToJokeScreen=(joke)=> {
      this.props.navigation.navigate('JokeScreen',{joke})
    }
goToHoroScope=(scope)=> {
      this.props.navigation.navigate('HoroScope',{scope})
    }
goToNewsScreen=(news)=> {
      this.props.navigation.navigate('NewsScreen',{news})
    }
goToWeatherScreen=(weather)=> {
      this.props.navigation.navigate('WeatherScreen',{weather})
    }
  
  likePressed(){
    var like=db.ref('Rating/'  + '/')
    like.update({
     'LikePressed':1
    });
  }

 dislikePressed(){
    var dislike=db.ref('Rating/'  + '/')
    dislike.update({
     'DislikePressed':1
    });
  }

  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"white"}]} 
            onPress={()=>this.goToJokeScreen("joke")}>
            <Text style={styles.buttonText}>Read A Joke</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"white"}]} 
            onPress={()=>this.goToHoroScope("horoscope")}>
            <Text style={styles.buttonText}>Horoscope</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"white"}]} 
            onPress={()=>this.goToWeatherScreen("Weather")}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"white"}]} 
            onPress={()=>this.goToNewsScreen("News")}>
            <Text style={styles.buttonText}>Top News</Text>
          </TouchableOpacity>
        
        <View style={{  justifyContent : 'center',
                        alignSelf : 'center',
                       }}>
        
            <Text style={styles.buttonText}>Rate Us</Text>
         <TouchableOpacity  style={[styles.like,{backgroundColor:"white"}]} 
            onPress={this.likePressed}>
            <Text style={styles.likeText}>like</Text>
         
         
          <Image>
          style={{width:50, height:50,marginLeft:5}}
          source={require('../assets/thumbsup.png')}
          </Image>
          </TouchableOpacity>
         
          <TouchableOpacity style={[styles.dislike,{backgroundColor:"white"}]} 
            onPress={this.dislikePressed}>
            <Text style={styles.dislikeText}>dislike</Text>
         
          <Image>
          style={{width:50, height:50,marginTop:-35,marginLeft:100,}}
          source={require('../assets/thumbsdown.png')}
          </Image>
          </TouchableOpacity>
         
          </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black'
  },
  like:{
justifyContent : 'center',
    borderWidth : 2,
   alignSelf:'left',
   marginTop:30,
    borderRadius : 15,
    width : 70,
    height:50,
  }, 
  dislike:{
justifyContent : 'center',
  alignSelf:'right',
    borderWidth : 2,
    borderRadius : 15,
    width : 70,
    height:50,},
likeText:{
 textAlign : 'center',
    color : 'black'

},
dislikeText:{
  textAlign : 'center',
    color : 'black' 
}

})