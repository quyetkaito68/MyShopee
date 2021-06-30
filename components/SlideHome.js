import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';

function SlideHome(props) {
    return (
        <Swiper  autoplay={true} 
                    height={100}
                    showsPagination={false}
                   
        
        >
            <View style={styles.slide}>
                <Image source={{uri:'https://www.siliconera.com/wp-content/uploads/2021/05/Eula-Genshin-Impact.jpg',width:'100%', height:100}} />                
            </View>
            <View style={styles.slide}>
                <Image source={{uri:'https://st.gamevui.com/data/image/2021/01/18/Ganyu-doi-hinh.jpg',width:'100%', height:100}} />                
            </View>
            <View style={styles.slide}>
                <Image source={{uri:'https://picsum.photos/200/300.jpg',width:'100%', height:100}} />                
            </View>
        </Swiper>        
        
    );
}

export default SlideHome;

const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
     justifyContent: 'center',
     height:100,
     backgroundColor: 'transparent'
   },
  });
  