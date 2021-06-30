import React, { Component,useState } from 'react';
import { View,Text,StyleSheet,Image,ScrollView,Dimensions,Animated } from 'react-native';
import { color } from 'react-native-reanimated';

const {width}=Dimensions.get("window");
const height=width*0.5;
const image=[
    'https://cf.shopee.vn/file/b3a9e1c3738c775212d33ae9f7a0a368_xxhdpi',
    'https://cf.shopee.vn/file/f4eb84885477f28be4fdbc9ee3d4c57e_xxhdpi',
    'https://cf.shopee.vn/file/2d19676304251e96b0094476fa31de5a_xxhdpi',
    'https://cf.shopee.vn/file/9bceb667f95a7396685931ac84377e9c_xhdpi',
    'https://cf.shopee.vn/file/96c77b91b9888bbb9365c19cffaf8ca9_xhdpi',

];

export default class SlideHome extends Component {
    state={
        active:0
    }
    change = ({nativeEvent}) => {
        const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        
        if (slide !== this.state.active) {
            this.setState({active:slide});
        }
    };
    render(){
    return (
    <View style={styles.container}>
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={this.change}// chạy rồi
            style={styles.scroll}
            
        >
            {image.map((image,index)=>(
                <Image 
                key={index}
                source={{uri:image}}
                style={styles.image}
                />

            ))}
        </ScrollView>
        <View style={styles.pagination}>
            {
                image.map((i,k)=>(
                    <Text key={k} style={k==this.state.active? styles.pagingActiveText:styles.pagingText}>⬤</Text>
                ))
            }
        </View>
    </View>
    
        
    );
}}


const styles = StyleSheet.create({
    container:{width,height},
    scroll:{
        width,height
    },
    image:{width,height,resizeMode:'stretch'},
    pagination:{flexDirection:'row',position:'absolute',bottom:0, alignSelf:'center'},
    pagingText:{color:'#888',margin:3},
    pagingActiveText:{color:'#fff',margin:3},
});
  