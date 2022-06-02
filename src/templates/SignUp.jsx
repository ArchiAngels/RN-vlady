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
            Heading:require('../../assets/FontPoppins/Bold.ttf'),
        })
        setAppIsReady(true);
      }

    if (!appIsReady) {
        return null;
    }

    return <>

            <View style={styles.container}>
                <Text style={{...styles.title,fontFamily:"Details"}}>Registration</Text>
                <View style={styles.Enter}>
                    <Input placeholder = 'Login' type='01' font='Details'/>
                    <Input placeholder = 'Password' type='02' font='Details'/>
                </View>

                <View style={styles.rightsBox}>

                    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>
                        <Text onPress={()=>{setChecked(!isChecked)}} style={{...styles.rights,fontFamily:'Details'}}>                        
                            I accept the terms of the License Agreement and
                            confirm that I have read and understood the terms
                            of the Privacy Policy.
                        </Text>

                    
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{...styles.textBtn,fontFamily:'Heading'}}>Enter</Text>
                </TouchableOpacity>

                <Button
                    title="Go to message"
                    onPress={() => props.navigation.navigate('Message')}
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
    rightsBox:{
        flexDirection:'row',
        justifyContent:"space-between",
    },
    rights:{
        fontSize:10,
        fontWeight:"400",
        width:252,
        lineHeight:20
    },

    checkbox:{
        margin:8,
    },
    btn:{
        width:102,
        height:41,
        backgroundColor:"#000",
        marginTop:42,
        borderRadius:12,
        
    },
    textBtn:{
        textAlign:"center",
        fontWeight:"500",
        fontSize:14,
        color:"#fff",
        lineHeight:46,
    }
});

export default Registration;