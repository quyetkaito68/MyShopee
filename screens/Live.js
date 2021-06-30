import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Live(props) {
    return (
        <View style={styles.container}>
            <Text>LiveStream có gì nào</Text>
        </View>
        
    );
}

export default Live;
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  })