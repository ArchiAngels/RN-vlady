import React from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet,Dimensions } from 'react-native';

import Photo from '../../assets/karen.jpg';
import Setting from '../../assets/svg/setting.svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Header = () => {
  return <>
    <View style={styles.wrapper}>
        <Image source={Photo} style={styles.picture}></Image>
        <Text style={styles.NameText}>Karen</Text>
        <Text style={styles.NameText}> {WIDTH} x {HEIGHT}</Text>
        <TouchableOpacity>
            <Setting  style={styles.setting} width = {25} height={25}/>
        </TouchableOpacity>
    </View>
  
  </>
    
  
}

const styles = StyleSheet.create({
    wrapper:{
        // flex:1,
        width:WIDTH,
        // height:50,
        Height:100,
        flexDirection:'row',
        // paddingTop:40,
        padding:15,
    },

    picture:{
        width:50,
        height:50,
        borderRadius:50,
    },
    setting:{
        marginTop:10,
        marginLeft:105,
    },
    NameText:{
        paddingLeft:10,
        fontSize:20,
        color:"#000000",
        lineHeight:55,
        fontWeight:"bold"
    }
});

export default Header;