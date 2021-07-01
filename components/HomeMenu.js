import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import img from '../assets/favicon.png';


const SubMenu = (props)=>{
    return (
        <View style={style.submenu}>
            <View style={style.item}>
                <Image source={props.name1!=""?img:null}
                        style={style.iconsubmenu}
                />
                <Text style={{fontSize:10, textAlign:'center'}}>{props.name1}</Text>
            </View>
            <View style={style.item}>
                <Image source={props.name2!=""?img:null}
                        style={style.iconsubmenu}
                />
                <Text style={{fontSize:10, textAlign:'center'}}>{props.name2}</Text>
            </View>

        </View>
    );
};


const HomeMenu = ()=>{
    return (
        <View style={style.menu}>
            <ScrollView horizontal={true} fadingEdgeLength={100}>
                <SubMenu name1="Khung Giờ Săn Sale" name2="NowFood Chỉ 7K"/>                
                <SubMenu name1="Deal Gần Bạn - Chỉ Từ 1K" name2="Tech Zone - Siêu Thị Điện Máy"/>                
                <SubMenu name1="Gì Cũng Rẻ - Chỉ Từ 1K" name2="Hoàn Xu 15% Mỗi Ngày"/>                
                <SubMenu name1="Nạp Thẻ, Dịch Vụ & Phim" name2="Shopee Số Gì Đây"/>                
                <SubMenu name1="Freeship Xtra" name2="Hàng Hiệu -50%"/>                
                <SubMenu name1="Ưu Đãi Thành Viên - Tới 50%" name2="Hàng Quốc Tế"/>                
                <SubMenu name1="Shopee Premium" name2="Săn Siêu Sale"/>                
                <SubMenu name1="Shopee Mart - Siêu Thị 0Đ" name2="Ở Nhà Không Khó"/>                
                <SubMenu name1="Giải Thưởng Shopee" name2="Miễn Phí Vận Chuyển"/>                
                <SubMenu name1="Shopee Mall" name2="Ưu Đãi Đối Tác"/>                
                <SubMenu name1="Săn Xu Mỗi Ngày" name2="Mã Giảm Giá"/>   
                <SubMenu name1="KOL Club" name2=""/>   
      
            </ScrollView>
        </View>

    );
};


export default HomeMenu;

const style = StyleSheet.create({
    menu:{
        backgroundColor:"#fff",
        marginBottom:10,
        height:200
    },
    submenu:{
        display:'flex',
        margin:10,
        alignItems:'center'
    },
    item:{
        flex:1,
        marginBottom:10,
        alignItems:'center',
        maxWidth:75
    },
    iconsubmenu:{
        width:30,
        height:30,
    }
});
