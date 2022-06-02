import React,{useState} from "react";
import { View,
    StyleSheet,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    Button,
    

} from "react-native";

import Checkbox from 'expo-checkbox';
import * as Font from "expo-font";
import Input from '../components/input.jsx';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

const Registration = (props) =>{

    let [isChecked,setChecked] = useState(false);
    const [appIsReady, setAppIsReady] = useState(false);
    loadFonts();

    async function loadFonts(){
        await Font.loadAsync({
            Details:require('../../assets/FontPoppins/Regular.ttf'),
            Medium:require('../../assets/FontPoppins/Medium.ttf'),
            Heading:require('../../assets/FontPoppins/Bold.ttf'),
        })
        setAppIsReady(true);
      }

    if (!appIsReady) {
        return null;
    }

    return <>

            <View style={styles.container}>
                <Text style={{...styles.title,fontFamily:"Details"}}>Authorization</Text>
                <View style={styles.Enter}>
                    <Input placeholder = 'Login' type='01' font='Medium' marginBottom={24}/>
                    <Input placeholder = 'Password' type='02' font='Medium'/>
                </View>

                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{...styles.textBtn,fontFamily:'Heading'}}>Enter</Text>
                    </TouchableOpacity>

                    <View style={styles.btnRightText}>
                        <Text style={{...styles.GrayText,fontFamily:"Details"}}>
                            Have an account?
                        </Text>
                        <Text style={{...styles.blackText,fontFamily:"Details"}}>
                            Log in
                        </Text>
                    </View>
                </View>

                <Text style={{...styles.blackText,...styles.guest,fontFamily:"Details"}}>
                    Log in as a guest
                </Text>
                

                <Button
                    title="Go to Reg"
                    onPress={() => props.navigation.navigate('SignUp')}
                />
            </View>

    </>

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        // alignItems:"center",
        paddingRight:15,
        paddingLeft:15,
        width:width,
        height:height,
        backgroundColor:"#fff",
    },
    title:{
        fontWeight:"600",
        fontStyle:"normal",
        fontSize:20,
        textAlign:"left",
        marginBottom:32,
    },
    btn:{
        width:102,
        height:41,
        backgroundColor:"#000",
        borderRadius:12,
        
    },
    textBtn:{
        textAlign:"center",
        fontWeight:"500",
        fontSize:14,
        color:"#fff",
        lineHeight:46,
    },
    BtnContainer:{

        marginTop:32,
        flexDirection:"row"
    },
    btnRightText:{
        marginLeft:32,
    },
    blackText:{
        fontWeight:'500',
        fontSize:12,
        color:"#000",
    },
    GrayText:{
        fontWeight:"400",
        fontSize:12,
        color:"#00000060",
    },
    guest:{
        marginTop:42,
    }
});

export default Registration;