import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
export default class HomeScreen extends Component{
  render(){
    return(
      <View style={style.container}>
        <Image 
          style={{ width: '100%', height: 300}}
          source={ require('../assets/images/login-logo.png')}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 40, fontWeight: 'bold'}}>Welcome</Text>
        <Text style={{ 
          fontSize: 16, 
          color: 'gray', 
          textAlign: 'center', 
          marginHorizontal: 20,
        }}> Welcom to Login.A my app of designing login screen
        </Text>
        {/* -- Button Icon -- */}
        <View style={{ flexDirection: 'row', margin: 20 , paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Login')}
          style={{
            backgroundColor: '#0d47a1',
            padding:10,
            width:150,
           borderRadius: 30,
           marginHorizontal: 2 ,
          }}>
            <Text style={{textAlign: 'center', color: '#fff',fontSize: 18}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      <View style={{ flexDirection: 'row', margin: 20 , paddingVertical: 20 }}>
        <TouchableOpacity style={{
            backgroundColor: '#fff',
            padding:10,
            width:150,
           borderRadius: 30,
           marginHorizontal: 2 ,
           borderWidth: 1,
           borderColor: '#0d47a1',
          }}>
            <Text style={{textAlign: 'center', color: '#0d47a1',fontSize: 18}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
          {/* -- Social Icon -- */}
        <Text style={{fontSize: 16, marginTop: 10,}}> Or via social madia</Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View style={{ 
            height: 50, 
            width: 50, 
            borderRadius: 50/2, 
            backgroundColor: '#3f5ab5',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom: 5}}>F</Text>
          </View>
          <View style={{ 
            height: 50, 
            width: 50, 
            borderRadius: 50/2, 
            backgroundColor: '#FF1F1F',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom: 5}}>G</Text>
          </View>
          <View style={{ 
            height: 50, 
            width: 50, 
            borderRadius: 50/2, 
            backgroundColor: '#007EFF',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom: 5}}>in</Text>
          </View>
        </View>
        {/* -- End Social Icon -- */}
      </View>
    )


  }
}
const style = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})