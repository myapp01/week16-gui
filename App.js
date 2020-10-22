import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { View } from "react-native";
import HomeScreen from "./Screen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen";
const Stack = createStackNavigator();
export default class App extends Component{
  render(){
    return(
      <View style={{ flex:1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={ HomeScreen } />
            <Stack.Screen name='Login' component={ LoginScreen } />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
    )
  }
}