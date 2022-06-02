import React, { useCallback, useEffect, useState } from 'react';
import { 
    View ,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    Button,
    ScrollView
} from "react-native";

import * as Font from "expo-font";

import Man from '../../assets/MessageAuthor/FlyMan.png';
import Bg from '../../assets/MessageAuthor/bg.svg';

let width = Dimensions.get("window").width;


const MessageFromAuthors = (props) =>{

    const [appIsReady, setAppIsReady] = useState(false);
    loadFonts();

    async function loadFonts(){
        await Font.loadAsync({
            Details:require('../../assets/FontPoppins/Regular.ttf'),
            Heading:require('../../assets/FontPoppins/Bold.ttf'),
        })
        setAppIsReady(true);
      }

    if (!appIsReady) {
        return null;
    }

    return <>

            <ScrollView>
            <View>
                <View style={styles.containerImage}>
                    {/* <Image style={styles.background} source={Bg}/> */}
                    <Bg width={width} height = {500} style={styles.background}/>

                    <Image style={styles.man} source={Man}/>
                </View>

                <View style={styles.MessContainer}>
                    <Text style={{...styles.Heading,fontFamily:"Heading"}}>Message from {'\n'}the author</Text>
                    <Text style={{...styles.Details,fontFamily:"Details"}}>Scelerisque magna praesent amet ac nunc. Ipsum commodo varius molestie mauris. Semper condimentum varius sed imperdiet in ultricies in gravida. Vitae in cursus ut nibh pellentesque id.</Text>
            
            
                    <TouchableOpacity style={styles.Btn}>
                        <Text style={{...styles.BtnText,fontFamily:"Details"}}>Next</Text>
                    </TouchableOpacity>
                </View>


                <Button
                    title="Go to Question"
                    onPress={() => props.navigation.navigate('Question')}
                />


                
            </View>
            </ScrollView>
    
    </>

}

const styles = StyleSheet.create({
    Heading:{
        fontSize:22,
        letterSpacing:-0.3,
    },
    MessContainer:{
        paddingLeft:32,
        paddingRight:32,
        marginTop:-25,

    },
    Details:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:24,
        letterSpacing:-0.3,
    },

    background:{
        // position:'absolute',
        top:10,
    },
    man:{
        position:"absolute"
    },
    Btn:{
        marginTop:42,
        width:97,
        height:41,
        backgroundColor:"#000",
        borderRadius:12,
        justifyContent:'center'
        
    },
    BtnText:{
        textAlign:"center",
        fontSize:14,
        // lineHeight:41,
        color:"#fff"
    },
});

export default MessageFromAuthors;