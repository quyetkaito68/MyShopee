import React from 'react';
import { View,Text,StyleSheet, SafeAreaView } from 'react-native';


import HomeCategoris from '../components/HomeCategories.js'
import SlideHome from '../components/SlideHome.js';

function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home có gì nào</Text>
            <SlideHome/>
        </SafeAreaView>
        
    );
}

export default Home;
const styles = StyleSheet.create({
    container:{
      top: 20,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  })