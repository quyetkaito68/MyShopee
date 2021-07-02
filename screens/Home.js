import React, { Component } from 'react';
import { View,Text,StyleSheet, SafeAreaView,ScrollView, TouchableOpacity,Image,Animated} from 'react-native';
import Carousel from 'react-native-smart-carousel';



import FlashSale from '../components/FlashSale.js';
import HomeMenu from '../components/HomeMenu.js';
import Recommend from '../components/Recommend.js';
import SlideHome from '../components/SlideHome.js';



// class ShopeeMall extends Component{
//     render(){
//         <TouchableOpacity style={{flex:1}}>
//             <View>
//                 <Image source={{uri:this.props.item.image}}></Image>
//             </View>
//         </TouchableOpacity>
//     }
// }
class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            page:1,
            data: [
                {
                  id: '1',
                  title: 'Fashion New',
                  image: 'https://cf.shopee.co.id/file/65164c330fe5dcd4b549c26ba132b082_mdpi',
                  title2: 'Gratis Ongkir Min. Blj RP0',
                  image2: 'https://cf.shopee.co.id/file/c5b56ff42e59c067f6ff42b7f8bf8ebb_mdpi',
                },
                {
                  id: '2',
                  title: 'Shopee Liga 1',
                  title2: 'Cashback & Voucher',
                  image: 'https://cf.shopee.co.id/file/28af3bde68e263fbb22cf7e721995aca_mdpi',
                  image2: 'https://cf.shopee.co.id/file/45d56e0479139407d21058ebf0db2c18_mdpi',
                },
                {
                  id: '3',
                  image: 'https://cf.shopee.co.id/file/67f3e3f21980f16e56708f90ac824677_mdpi',
                  title: 'Produk Digital',
                  image2: 'https://cf.shopee.co.id/file/1adc3f8eb48e266fbb2c7a6f96b07632_mdpi',
                  title2: 'Shopee Games'
                },
                {
                  id: '4',
                  image: 'https://cf.shopee.co.id/file/2141bfac013f0ddec9edcead24c5dd3a_mdpi',
                  title: 'Serba 10 Ribu',
                  image2: 'https://cf.shopee.co.id/file/73cd5727e938469f3a76e75063b38651_mdpi',
                  title2: 'Shopee Live'
                },
                {
                  id: '5',
                  image: 'https://cf.shopee.co.id/file/ed12a75188e87fa8e2abdd22987817cd_mdpi',
                  title: 'Men Saleee',
                  image2: 'https://cf.shopee.co.id/file/31ae2807a3ba16f6d178d790984ad364_mdpi',
                  title2: 'Elektronik Center'
                },
                {
                  id: '6',
                  image: 'https://cf.shopee.co.id/file/76d3682ef1e8d6509884396c76882b19_mdpi',
                  title: 'Shopee Mart',
                  image2: 'https://cf.shopee.co.id/file/eda88d3aeb6b530fb474748b3745b2eb_mdpi',
                  title2: 'Bayar Di Tempat'
                },
                {
                  id: '7',
                  image: 'https://cf.shopee.co.id/file/02d68f4802d362eebc2651cf5fffc818_mdpi',
                  title: 'Garansi',
                  image2: 'https://cf.shopee.co.id/file/089a2d01c0eec65b4dd8868eb9744457_mdpi',
                  title2: 'Shopee24'
                },
                {
                  id: '8',
                  image: 'https://cf.shopee.co.id/file/3cdb64f61f85872896dc005831022c5c_mdpi',
                  title: 'Pastin Ada',
                  image2: 'https://cf.shopee.co.id/file/cbd3190664937ba29777128f396c54a7_mdpi',
                  title2: 'Shopee Grosir'
                },
                {
                  id: '9',
                  image: 'https://cf.shopee.co.id/file/739145261c83cb94365a04092a2a3d99_mdpi',
                  title: 'Koin Receh',
                  image2: 'https://cf.shopee.co.id/file/92adf331a35427749be394080dcdb076_mdpi',
                  title2: 'Promo Bank'
                },
                {
                  id: '10',
                  image: 'https://cf.shopee.co.id/file/28f927fafe477945932b2cb571023be7_mdpi',
                  title: 'More',
                  image2: 'https://cf.shopee.co.id/file/063614d109a1921becac69eb6fafdba7_mdpi',
                  title2: 'Semua Promo'
                }
              ]
        };
    }


    render(){
        const dataSlide = [
            {
              "id": '339964',
              "imagePath": "https://cf.shopee.co.id/file/webp/167d17a4d0733942a5853ae5305108cd_xxhdpi", // URL
            },
            {
              "id": '33995',
              "imagePath": "https://cf.shopee.co.id/file/webp/baa1cd10eda6eedbafee8f002ae6b391_xxhdpi",
            },
            {
              "id": '33995dsf4',
              "imagePath": 'https://cf.shopee.co.id/file/webp/f3824ab80b89d29677eca72163f93565_xxhdpi',
            },
            {
              "id": '3399545dsf4',
              "imagePath": 'https://cf.shopee.co.id/file/webp/1836a466998e4d1f7cca52275028f6be_xxhdpi',
            },
            {
              "id": '33993465dsf4',
              "imagePath": 'https://cf.shopee.co.id/file/webp/abec0363e8defc836985fa884529470a_xxhdpi',
            },
            {
              "id": '33993465d585',
              "imagePath": 'https://cf.shopee.co.id/file/webp/286bb3d889034d103f8576cb6119bc71_xxhdpi',
            },
          ];

        return (            
          <View style={styles.fill}>          
              <Carousel
                    data={dataSlide}
                    autoPlay={true}
                    height={250}
                    navigation={true}
                    navigationColor={'#ffffff'}
                    navigationType={'dots'}                    
                />
                
                {/* <HomeMenu/>
                <FlashSale/>
                <Recommend/>     */}
              
            </View>
            
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    fill:{
        flex:1
    },
    container:{
        flex:1,
    //  alignItems:'stretch',
    //   alignItems:'center',
    //   justifyContent:'center',
    }
  })