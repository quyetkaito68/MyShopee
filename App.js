import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HomeCategoris from './components/HomeCategories.js'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './screens/Home.js';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is my Home!</Text>
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text>This is News Feed</Text>
    </View>
  );
}
function LiveScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Live Screen</Text>
    </View>
  );
}
function NotifiyScreen() {
  return (
    <View style={styles.container}>
      <Text>This is all of your notification</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile here!</Text>
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
//const BottomTabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TopTab.Navigator tabBarPosition='bottom'>
        <TopTab.Screen name="Home" component={HomeScreen}/>
        <TopTab.Screen name="Feed" component={FeedScreen} />
        <TopTab.Screen name="Live" component={FeedScreen} />
        <TopTab.Screen name="Notification" component={FeedScreen} />
        <TopTab.Screen name="Profile" component={ProfileScreen}/>
      </TopTab.Navigator>
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

