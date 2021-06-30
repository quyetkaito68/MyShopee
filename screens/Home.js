import React from 'react';
import { View,Text,StyleSheet, SafeAreaView } from 'react-native';


import HomeCategoris from '../components/HomeCategories.js'
import HomeMenu from '../components/HomeMenu.js';
import SlideHome from '../components/SlideHome.js';

function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home có gì nào</Text>
            <SlideHome/>
            <HomeMenu/>
        </SafeAreaView>
        
    );
}

export default Home;
const styles = StyleSheet.create({
    container:{
      alignItems:'stretch',
      alignItems:'center',
      justifyContent:'center',
    }
  })