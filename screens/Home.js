import React from 'react';
import { View,Text,StyleSheet, SafeAreaView } from 'react-native';
import HomeMenu from '../components/HomeMenu.js';
import SlideHome from '../components/SlideHome.js';

function Home(props) {
    return (
        
        <View style={styles.container}>     
            <SlideHome/>
            <HomeMenu/>
            
            

        </View>
        
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