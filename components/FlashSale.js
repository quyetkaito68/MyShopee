import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Item = (props)=>{
    return (
        <View style={styles.item}>
            <View style={{flex:3}}>
                <Image source={require('../assets/icon.png')} style={styles.img_item} />
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Text>{props.cost}</Text>
                <Text>{props.count}</Text>
            </View>
        </View>
    );
}

const FlashSale = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image 
                    style={{
                        width: 150,
                        height:20,
                        resizeMode:'contain',
                        flex:1,
                      }}
                      source={{
                        uri:'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png'
                      }}
                />
                <View style={{flexDirection:'row-reverse',flex:2}}>
                    <Text style={{marginRight:'5%'}}>Xem tất cả </Text>
                </View>

                
                
            </View>
            <View style={styles.list_item}>
                <ScrollView horizontal={true}>
                    <Item cost="5000đ" count="10"/>
                    <Item cost="5000đ" count="10"/>
                    <Item cost="5000đ" count="10"/>
                    <Item cost="5000đ" count="10"/>
                    <Item cost="5000đ" count="10"/>
                    <Item cost="5000đ" count="10"/>
                    
                    
                    
                </ScrollView>
            </View>
            
        </View>

    );
}

const styles = StyleSheet.create({

    container:{
        display:'flex',
        backgroundColor:'#fff',
        minHeight:250,
    },
    title:{
        flexDirection:"row",
        backgroundColor:'#FFF',
        flex:1,
        marginTop:10
    },
    list_item:{
        flex:4,
    },
    item:{
        alignItems:'center',
        paddingLeft:1,
        paddingRight:1,
        minWidth:150,
    },
    img_item:{
        width:125,
        height:125,
        resizeMode:"stretch",
    }
})


export default FlashSale;