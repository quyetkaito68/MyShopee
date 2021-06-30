import * as React from 'react';
import { StyleSheet, Text, View, ScrollView ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home.js';
import Feed from './screens/Feed.js';
import HomeCategoris from './components/HomeCategories.js'
import { render } from 'react-dom';



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

export default function App() {
  return (
    <NavigationContainer>
      <TopTab.Navigator 
          //set icon
          screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              Profile: 'account',
              Feed:'vector-arrange-above',
              Live: 'cast-connected',  
              Notification: 'bell',

            };
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },
        })}
        tabBarPosition='bottom' //vị trí navigagor
        initialRouteName='Home' //điểm bắt đầu
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'grey',         
          upperCaseLabel: false,
          showIcon: true,
          labelStyle: {
              fontSize: 9,
              marginTop: 1
            },
          style: {
              backgroundColor: '#f2f2f2',
              elevation: 15,
              height: 50,
              
            },          
        }}>
        <TopTab.Screen name="Home" component={Home} />
        <TopTab.Screen name="Feed" component={FeedScreen} />
        <TopTab.Screen name="Live" component={LiveScreen} />
        <TopTab.Screen name="Notification" component={NotifiyScreen} />
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

