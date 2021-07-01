import React from 'react';
import {
    View,Text,StyleSheet,Dimensions,Image
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const RecommendItem=({item})=> {
    return (
        <View style = {[styles.containter]}>
        <Image source={{uri:item.image}} style={styles.image}></Image>
        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

        </View>
        </View>
    );
}

export default RecommendItem;

const styles = StyleSheet.create({
    containter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        //flex:0.7,
        width:deviceWidth/2,
        height:deviceWidth/2,
        resizeMode:'stretch',
        justifyContent:'center',
    },
    title: {
        fontSize: 15,
    },
    description:{
        fontSize:20,
        color:'orange',
    },
});