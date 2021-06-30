import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Feed(props) {
    return (
        <View style={styles.container}>
            <Text>NewFeed</Text>
        </View>
        
    );
}

export default Feed;
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  })