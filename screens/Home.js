import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import HomeCategoris from '../components/HomeCategories.js'

function Home(props) {
    return (
        <View style={styles.container}>
            <Text>This is my Home!</Text>
        </View>
        
    );
}

export default Home;
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  })