import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,useWindowDimensions} from 'react-native';
import RecommendItem from '../components/RecommendItem';

const DATA = [
    {
      id: '1',
      title: '1 Item',
      description: '100.000đ',
      image: require('../assets/favicon.png'),
      //image: 'https://cf.shopee.co.id/file/765aeb4b74bccb805fbd977000a4536c_tn',
    },
    {
        id: '2',
        title: '2 Item',
        description: '200.000đ',
        image: require('../assets/favicon.png'),
        //image: 'https://cf.shopee.co.id/file/57a3f9127fc2d3bae2f40b340832c441_tn',
      },
      {
        id: '3',
        title: '3 Item',
        description: '500.000đ',
        image: require('../assets/icon.png'),
        //image: 'https://cf.shopee.co.id/file/9ca203634f979d8a8458356e5358383e_tn',
      },
      {
        id: '4',
        title: '4 Item',
        description: '123.000đ',
        image: require('../assets/icon.png'),
        //image: 'https://cf.shopee.co.id/file/69144231e045fed91be0041237e3478b_tn',
      },
      {
        id: '5',
        title: '5 Item',
        description: '96.000đ',
        image: require('../assets/icon.png'),
        //image: 'https://cf.shopee.co.id/file/729673dc15fb5a4e151b7c6960b25849_tn',
      },
      {
        id: '6',
        title: '6 Item',
        description: '10.000đ',
        image: require('../assets/icon.png'),
        //image: 'https://cf.shopee.co.id/file/729673dc15fb5a4e151b7c6960b25849_tn',
      },
      {
        id: '7',
        title: '7 Item',
        description: '12.000đ',
        image: require('../assets/icon.png'),
        //image: 'https://cf.shopee.co.id/file/729673dc15fb5a4e151b7c6960b25849_tn',
      },
];

const Recommend=()=> {    
    return (
    <View style={styles.container}>
      <View style={styles.title} >
        <Text style={styles.recommentTittle}>Gợi ý hôm nay</Text>
      </View>
        <FlatList
        data={DATA}
        renderItem={({item})=> <RecommendItem item={item}/>}        
        //numColumns={2}
        keyExtractor={item => item.id}
        />
    </View>
    );

}

export default Recommend;
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
       alignSelf:'flex-start',
        padding:5,    
            
    },
    recommentTittle:{
      fontSize:20,
      fontWeight:'normal',
      color:'#EE4D2D',    
      textTransform:'uppercase'  ,
    },
});
  