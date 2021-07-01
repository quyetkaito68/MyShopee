import React from 'react';
import { View,Text,StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import FlashSale from '../components/FlashSale.js';
import HomeMenu from '../components/HomeMenu.js';
import Recommend from '../components/Recommend.js';
import SlideHome from '../components/SlideHome.js';

function Home(props) {
    return (
        
        <ScrollView style={styles.container}>
            <SlideHome/>
            <HomeMenu/>
            <Recommend/>
           
        
            
            

        </ScrollView>
        
    );
}

export default Home;
const styles = StyleSheet.create({
    container:{
    //  alignItems:'stretch',
    //   alignItems:'center',
    //   justifyContent:'center',
    }
  })