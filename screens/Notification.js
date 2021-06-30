import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Notification(props) {
    return (
        <View style={styles.container}>
            <Text>Notification có gì nào</Text>
        </View>
        
    );
}

export default Notification;
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  })