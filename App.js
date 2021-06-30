import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HomeCategoris from './components/HomeCategories.js'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home.js';


class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    )
  }
}
class ProfileScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>Profile</Text>
      </View>
    )
  }
}

function x() {
  return (
    <View style={styles.container}>
      <Text>This is my Home!</Text>
    </View>
  );
}


function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
//const BottomTabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={x} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

