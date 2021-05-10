import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadStory from './screens/ReadStoryScreen';
import WriteStory from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStory},
  WriteStory: {screen: WriteStory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./Images/readImg.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./Images/writeImg.png")}
          style={{width:45, height:44}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});